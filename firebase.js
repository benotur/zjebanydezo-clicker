// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbcVL4dhTYHuMCpBYT_c1AVAnbb_6KZ3E",
  authDomain: "zjebanydezo-clicker.firebaseapp.com",
  databaseURL: "https://zjebanydezo-clicker-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zjebanydezo-clicker",
  storageBucket: "zjebanydezo-clicker.firebasestorage.app",
  messagingSenderId: "553894031508",
  appId: "1:553894031508:web:103e020a6a41a2f8c10481",
  measurementId: "G-BZ0FSHNE46"
};

// Initialize Firebase (using CDN compat version)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Set auth persistence to LOCAL (persists until explicitly signed out)
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        console.log('Auth persistence set to LOCAL');
    })
    .catch((error) => {
        console.error('Failed to set auth persistence:', error);
    });

// Current user
let currentUser = null;

// Authentication functions
window.registerUser = async (email, password, username) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Save user data to database
        await database.ref('users/' + user.uid).set({
            username: username,
            email: email,
            totalDezos: 0,
            bestScore: 0,
            joinedAt: firebase.database.ServerValue.TIMESTAMP,
            lastLogin: firebase.database.ServerValue.TIMESTAMP
        });
        
        console.log('User registered successfully!');
        return { success: true, user: user };
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, error: error.message };
    }
};

window.loginUser = async (email, password) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Update last login
        await database.ref('users/' + user.uid + '/lastLogin').set(firebase.database.ServerValue.TIMESTAMP);
        
        console.log('User logged in successfully!');
        return { success: true, user: user };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: error.message };
    }
};

window.logoutUser = async () => {
    try {
        await auth.signOut();
        currentUser = null;
        console.log('User logged out successfully!');
        return { success: true };
    } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: error.message };
    }
};

// Game data functions
window.saveGameData = async (gameData) => {
    if (!currentUser) return;
    
    try {
        const userRef = database.ref('users/' + currentUser.uid);
        const snapshot = await userRef.once('value');
        const userData = snapshot.val() || {};
        
        await userRef.set({
            ...userData,
            totalDezos: gameData.totalZjebanydezo,
            bestScore: Math.max(userData.bestScore || 0, gameData.totalZjebanydezo),
            lastSave: firebase.database.ServerValue.TIMESTAMP,
            gameState: {
                zjebanydezo: gameData.zjebanydezo,
                totalZjebanydezo: gameData.totalZjebanydezo,
                zjebanydezosPerSecond: gameData.zjebanydezosPerSecond,
                clickPower: gameData.clickPower,
                upgrades: gameData.upgrades,
                achievements: gameData.achievements
            }
        });
        
        console.log('Game data saved successfully!');
    } catch (error) {
        console.error('Save error:', error);
    }
};

window.loadGameData = async () => {
    if (!currentUser) return null;
    
    try {
        const userRef = database.ref('users/' + currentUser.uid);
        const snapshot = await userRef.once('value');
        
        if (snapshot.exists()) {
            const userData = snapshot.val();
            console.log('Game data loaded successfully!');
            return userData.gameState || null;
        }
        return null;
    } catch (error) {
        console.error('Load error:', error);
        return null;
    }
};

// Leaderboard functions
window.getLeaderboard = async () => {
    try {
        const usersRef = database.ref('users');
        const snapshot = await usersRef.once('value');
        
        if (snapshot.exists()) {
            const users = snapshot.val();
            const leaderboard = Object.entries(users)
                .map(([uid, userData]) => ({
                    uid,
                    username: userData.username || 'Anonymous',
                    totalDezos: userData.totalDezos || 0,
                    bestScore: userData.bestScore || 0
                }))
                .sort((a, b) => b.totalDezos - a.totalDezos)
                .slice(0, 10); // Top 10
            
            return leaderboard;
        }
        return [];
    } catch (error) {
        console.error('Leaderboard error:', error);
        return [];
    }
};

// Auth state observer
auth.onAuthStateChanged((user) => {
    console.log('Firebase auth state changed:', user ? 'User signed in' : 'User signed out');
    currentUser = user;
    if (user) {
        console.log('User is signed in:', user.email, 'UID:', user.uid);
        // Trigger UI update
        window.dispatchEvent(new CustomEvent('authStateChanged', { detail: { user, loggedIn: true } }));
    } else {
        console.log('User is signed out');
        window.dispatchEvent(new CustomEvent('authStateChanged', { detail: { user: null, loggedIn: false } }));
    }
});

// Export current user getter
window.getCurrentUser = () => currentUser;