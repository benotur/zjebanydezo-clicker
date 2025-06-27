const firebaseConfig = {
  apiKey: "AIzaSyDbcVL4dhTYHuMCpBYT_c1AVAnbb_6KZ3E",
  authDomain: "zjebanydezo-clicker.firebaseapp.com",
  projectId: "zjebanydezo-clicker",
  storageBucket: "zjebanydezo-clicker.firebasestorage.app",
  messagingSenderId: "553894031508",
  appId: "1:553894031508:web:103e020a6a41a2f8c10481",
  measurementId: "G-BZ0FSHNE46"
};

// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, get, child, push, onValue, serverTimestamp } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Current user
let currentUser = null;

// Authentication functions
export const registerUser = async (email, password, username) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Save user data to database
        await set(ref(database, 'users/' + user.uid), {
            username: username,
            email: email,
            totalDezos: 0,
            bestScore: 0,
            joinedAt: serverTimestamp(),
            lastLogin: serverTimestamp()
        });
        
        console.log('User registered successfully!');
        return { success: true, user: user };
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, error: error.message };
    }
};

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Update last login
        await set(ref(database, 'users/' + user.uid + '/lastLogin'), serverTimestamp());
        
        console.log('User logged in successfully!');
        return { success: true, user: user };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: error.message };
    }
};

export const logoutUser = async () => {
    try {
        await signOut(auth);
        currentUser = null;
        console.log('User logged out successfully!');
        return { success: true };
    } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: error.message };
    }
};

// Game data functions
export const saveGameData = async (gameData) => {
    if (!currentUser) return;
    
    try {
        const userRef = ref(database, 'users/' + currentUser.uid);
        await set(userRef, {
            ...gameData.userData,
            totalDezos: gameData.totalHalusky,
            bestScore: Math.max(gameData.userData?.bestScore || 0, gameData.totalHalusky),
            lastSave: serverTimestamp(),
            gameState: {
                halusky: gameData.halusky,
                totalHalusky: gameData.totalHalusky,
                haluskyPerSecond: gameData.haluskyPerSecond,
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

export const loadGameData = async () => {
    if (!currentUser) return null;
    
    try {
        const userRef = ref(database, 'users/' + currentUser.uid);
        const snapshot = await get(userRef);
        
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
export const getLeaderboard = async () => {
    try {
        const usersRef = ref(database, 'users');
        const snapshot = await get(usersRef);
        
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
onAuthStateChanged(auth, (user) => {
    currentUser = user;
    if (user) {
        console.log('User is signed in:', user.email);
        // Trigger UI update
        window.dispatchEvent(new CustomEvent('authStateChanged', { detail: { user, loggedIn: true } }));
    } else {
        console.log('User is signed out');
        window.dispatchEvent(new CustomEvent('authStateChanged', { detail: { user: null, loggedIn: false } }));
    }
});

// Export current user getter
export const getCurrentUser = () => currentUser;