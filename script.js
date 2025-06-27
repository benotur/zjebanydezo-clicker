// Game state
let gameState = {
    zjebanydezo: 0,
    totalZjebanydezo: 0,
    zjebanydezosPerSecond: 0,
    clickPower: 1,
    upgrades: {
        beer: { owned: 0, cost: 10, power: 1, costMultiplier: 1.15, name: "Zlatý Bažant Beer", icon: "🍺", description: "+1 dežo per click" },
        babicka: { owned: 0, cost: 100, power: 1, costMultiplier: 1.15, name: "Village Babička", icon: "👵", description: "+1 dežo per second" },
        kucharka: { owned: 0, cost: 500, power: 5, costMultiplier: 1.15, name: "Halušky Cook", icon: "🍲", description: "+5 dežo per second" },
        felicia: { owned: 0, cost: 2500, power: 25, costMultiplier: 1.15, name: "Škoda Felicia", icon: "🚗", description: "+25 dežo per second" },
        panel: { owned: 0, cost: 10000, power: 100, costMultiplier: 1.15, name: "Panel Apartment", icon: "🏘️", description: "+100 dežo per second" },
        slivovica: { owned: 0, cost: 50000, power: 500, costMultiplier: 1.15, name: "Homemade Slivovica", icon: "🥃", description: "+500 dežo per second" },
        
        // More Slovak meme upgrades
        dedko: { owned: 0, cost: 100000, power: 1000, costMultiplier: 1.15, name: "Village Dedko", icon: "👴", description: "+1000 dežo per second" },
        slovnaft: { owned: 0, cost: 250000, power: 2500, costMultiplier: 1.15, name: "Slovnaft Refinery", icon: "🏭", description: "+2500 dežo per second" },
        koliba: { owned: 0, cost: 500000, power: 5000, costMultiplier: 1.15, name: "Mountain Koliba", icon: "�️", description: "+5000 dežo per second" },
        pagac: { owned: 0, cost: 1000000, power: 10000, costMultiplier: 1.15, name: "Richard Pagáč", icon: "🎭", description: "+10000 dežo per second" },
        
        // Epic Slovak memes
        marian: { owned: 0, cost: 2500000, power: 25000, costMultiplier: 1.15, name: "Marián Čekovský", icon: "📺", description: "+25000 dežo per second" },
        tesco: { owned: 0, cost: 5000000, power: 50000, costMultiplier: 1.15, name: "Tesco Value Goods", icon: "🛒", description: "+50000 dežo per second" },
        helenka: { owned: 0, cost: 10000000, power: 100000, costMultiplier: 1.15, name: "Helenka Vondráčková", icon: "🎤", description: "+100000 dežo per second" },
        slovan: { owned: 0, cost: 25000000, power: 250000, costMultiplier: 1.15, name: "ŠK Slovan Support", icon: "⚽", description: "+250000 dežo per second" },
        csob: { owned: 0, cost: 50000000, power: 500000, costMultiplier: 1.15, name: "ČSOB Banking", icon: "🏦", description: "+500000 dežo per second" },
        
        // Legendary Slovak memes
        danko: { owned: 0, cost: 100000000, power: 1000000, costMultiplier: 1.15, name: "Danko's Politics", icon: "🎪", description: "+1M dežo per second" },
        lidl: { owned: 0, cost: 250000000, power: 2500000, costMultiplier: 1.15, name: "Lidl Shopping Spree", icon: "🛍️", description: "+2.5M dežo per second" },
        sme: { owned: 0, cost: 500000000, power: 5000000, costMultiplier: 1.15, name: "SME Newspaper Drama", icon: "📰", description: "+5M dežo per second" },
        tatry: { owned: 0, cost: 1000000000, power: 10000000, costMultiplier: 1.15, name: "High Tatras Tourism", icon: "⛰️", description: "+10M dežo per second" },
        euro: { owned: 0, cost: 2500000000, power: 25000000, costMultiplier: 1.15, name: "Euro Adoption Chaos", icon: "💶", description: "+25M dežo per second" },
        
        // Ultimate Slovak memes
        velvet: { owned: 0, cost: 5000000000, power: 50000000, costMultiplier: 1.15, name: "Velvet Revolution", icon: "�", description: "+50M dežo per second" },
        president: { owned: 0, cost: 10000000000, power: 100000000, costMultiplier: 1.15, name: "Presidential Palace", icon: "🏰", description: "+100M dežo per second" },
        bratislava: { owned: 0, cost: 25000000000, power: 250000000, costMultiplier: 1.15, name: "Bratislava Castle", icon: "🏛️", description: "+250M dežo per second" },
        slovakia: { owned: 0, cost: 50000000000, power: 500000000, costMultiplier: 1.15, name: "Entire Slovakia", icon: "🇸🇰", description: "+500M dežo per second" },
        
        // Secret final upgrade
        universe: { owned: 0, cost: 100000000000, power: 1000000000, costMultiplier: 1.15, name: "Slovak Universe Empire", icon: "�", description: "+1B dežo per second" }
    },
    achievements: []
};

// Epic Slovak drunk meme messages
const funnyMessages = [
    "This guy is completely wasted!",
    "Dežo had too much slivovica again",
    "Village pub at 2 PM vibes",
    "Grandpa's homemade pálenka hits different",
    "Slovak countryside drinking champion",
    "Panel apartment balcony drinking session",
    "Škoda Felicia ride after the pub",
    "Village festival aftermath",
    "East Slovakia drinking traditions",
    "Borovička for breakfast, why not?",
    "This is how we party in Slovakia",
    "Village wedding drinking contest",
    "Slivovica production quality testing",
    "Weekend in Slovak countryside",
    "Local pub legend status achieved",
    "Traditional Slovak hospitality",
    "Mountain hut drinking session",
    "Socialist era pub memories",
    "Village mayor election celebration",
    "Harvest festival drinking competition",
    "Slovak hospitality means more drinks",
    "Grandpa's secret recipe working",
    "Village pub closing time extended",
    "Traditional Slovak male bonding",
    "Dežo is the local drinking champion",
    // New Slovak meme messages
    "Babička made extra halušky today!",
    "Richard Pagáč just told another joke!",
    "Marián Čekovský is on TV again!",
    "Someone bought Tesco Value everything!",
    "ŠK Slovan scored a goal! Time to drink!",
    "ČSOB bank fees are insane again!",
    "Danko said something controversial!",
    "Lidl has another crazy discount!",
    "SME newspaper drama intensifies!",
    "High Tatras tourism is booming!",
    "Euro adoption was wild times!",
    "Velvet Revolution memories!",
    "Presidential palace gossip!",
    "Bratislava Castle is beautiful!",
    "Slovakia is the best country!",
    "Village dedko knows everything!",
    "Slovnaft refinery working overtime!",
    "Mountain koliba party tonight!",
    "Helenka Vondráčková classic hits!",
    "Panel apartment life is real!"
];

// Achievement definitions
const achievementsList = [
    { id: 'first_click', name: 'First Drink!', description: 'Made your first click', condition: () => gameState.totalZjebanydezo >= 1 },
    { id: 'hundred_points', name: 'Getting Tipsy!', description: 'Earned 100 zjebaný dežo', condition: () => gameState.totalZjebanydezo >= 100 },
    { id: 'first_babicka', name: 'Babička\'s Helper!', description: 'Hired your first village babička', condition: () => gameState.upgrades.babicka.owned >= 1 },
    { id: 'thousand_points', name: 'Village Drunk!', description: 'Earned 1000 zjebaný dežo', condition: () => gameState.totalZjebanydezo >= 1000 },
    { id: 'ten_babicka', name: 'Babička Army!', description: 'Have 10 village babičky working', condition: () => gameState.upgrades.babicka.owned >= 10 },
    { id: 'first_felicia', name: 'Felicia Owner!', description: 'Own a legendary Škoda Felicia!', condition: () => gameState.upgrades.felicia.owned >= 1 },
    { id: 'first_panel', name: 'Panel Life!', description: 'Own a communist panel apartment!', condition: () => gameState.upgrades.panel.owned >= 1 },
    { id: 'million_points', name: 'Millionaire Dežo!', description: 'Earned 1 million zjebaný dežo!', condition: () => gameState.totalZjebanydezo >= 1000000 },
    { id: 'pagac_owner', name: 'Comedy King!', description: 'Hire Richard Pagáč himself!', condition: () => gameState.upgrades.pagac.owned >= 1 },
    { id: 'marian_owner', name: 'TV Star!', description: 'Get Marián Čekovský on your side!', condition: () => gameState.upgrades.marian.owned >= 1 },
    { id: 'slovan_fan', name: 'True Slovak!', description: 'Support ŠK Slovan like a legend!', condition: () => gameState.upgrades.slovan.owned >= 1 },
    { id: 'billion_points', name: 'Billion Dežo Legend!', description: 'Earned 1 billion zjebaný dežo!', condition: () => gameState.totalZjebanydezo >= 1000000000 },
    { id: 'slovakia_owner', name: 'President Dežo!', description: 'You literally own entire Slovakia!', condition: () => gameState.upgrades.slovakia.owned >= 1 },
    { id: 'universe_owner', name: 'Universal Slovak Emperor!', description: 'Slovak Universe Empire achieved!', condition: () => gameState.upgrades.universe.owned >= 1 }
];

// DOM elements
const zjebanydezosButton = document.getElementById('zjebanydezo-button');
const zjebanydezosCount = document.getElementById('zjebanydezo-count');
const zjebanydezosPerSecondDisplay = document.getElementById('zjebanydezo-per-second');
const totalZjebanydezosDisplay = document.getElementById('total-zjebanydezo');
const clickEffect = document.getElementById('click-effect');
const achievementsList_el = document.getElementById('achievements-list');
const messageDisplay = document.getElementById('message-display');

// Event listeners
zjebanydezosButton.addEventListener('click', clickZjebanydezo);

// Note: Upgrade event listeners are now added dynamically in generateUpgradeHTML()

// Main click function
function clickZjebanydezo(event) {
    gameState.zjebanydezo += gameState.clickPower;
    gameState.totalZjebanydezo += gameState.clickPower;
    
    updateDisplay();
    showClickEffect(event);
    checkAchievements();
    
    // Random funny message
    if (Math.random() < 0.1) { // 10% chance
        showFunnyMessage();
    }
}

// Show click effect
function showClickEffect(event) {
    const rect = zjebanydezosButton.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    clickEffect.style.left = x + 'px';
    clickEffect.style.top = y + 'px';
    clickEffect.textContent = '+' + gameState.clickPower;
    clickEffect.style.opacity = '1';
    clickEffect.style.animation = 'none';
    
    // Trigger animation
    setTimeout(() => {
        clickEffect.style.animation = 'clickEffect 1s ease-out forwards';
    }, 10);
}

// Buy upgrade
function buyUpgrade(upgradeType) {
    const upgrade = gameState.upgrades[upgradeType];
    
    if (gameState.zjebanydezo >= upgrade.cost) {
        gameState.zjebanydezo -= upgrade.cost;
        upgrade.owned++;
        
        // Apply upgrade effect
        if (upgradeType === 'beer') {
            gameState.clickPower += upgrade.power;
        } else {
            gameState.zjebanydezosPerSecond += upgrade.power;
        }
        
        // Increase cost
        upgrade.cost = Math.ceil(upgrade.cost * upgrade.costMultiplier);
        
        updateDisplay();
        updateUpgradeDisplay();
        checkAchievements();
        
        // Random upgrade message
        if (Math.random() < 0.5) {
            showFunnyMessage();
        }
    }
}

// Passive income (zjebanydezo per second)
setInterval(() => {
    if (gameState.zjebanydezosPerSecond > 0) {
        gameState.zjebanydezo += gameState.zjebanydezosPerSecond;
        gameState.totalZjebanydezo += gameState.zjebanydezosPerSecond;
        updateDisplay();
        
        if (Math.random() < 0.05) { // 5% chance every second
            checkAchievements();
        }
    }
}, 1000);

// Update main display
function updateDisplay() {
    zjebanydezosCount.textContent = formatNumber(Math.floor(gameState.zjebanydezo));
    zjebanydezosPerSecondDisplay.textContent = formatNumber(gameState.zjebanydezosPerSecond);
    totalZjebanydezosDisplay.textContent = formatNumber(Math.floor(gameState.totalZjebanydezo));
}

// Update upgrade displays
function updateUpgradeDisplay() {
    const upgradeElements = document.querySelectorAll('.upgrade');
    upgradeElements.forEach(upgrade => {
        const upgradeType = upgrade.dataset.upgrade;
        const upgradeData = gameState.upgrades[upgradeType];
        
        if (!upgradeData) return; // Skip if upgrade doesn't exist
        
        const costElement = upgrade.querySelector('.upgrade-cost span');
        const ownedElement = upgrade.querySelector('.upgrade-owned span');
        
        if (costElement) costElement.textContent = formatNumber(upgradeData.cost);
        if (ownedElement) ownedElement.textContent = upgradeData.owned;
        
        // Check if affordable
        if (gameState.zjebanydezo >= upgradeData.cost) {
            upgrade.classList.add('affordable');
        } else {
            upgrade.classList.remove('affordable');
        }
    });
}

// Check achievements
function checkAchievements() {
    achievementsList.forEach(achievement => {
        if (!gameState.achievements.includes(achievement.id) && achievement.condition()) {
            gameState.achievements.push(achievement.id);
            showAchievement(achievement);
        }
    });
}

// Show achievement
function showAchievement(achievement) {
    const achievementElement = document.createElement('div');
    achievementElement.className = 'achievement';
    achievementElement.textContent = achievement.name;
    achievementElement.title = achievement.description;
    achievementsList_el.appendChild(achievementElement);
    
    // Show message
    showMessage(`🏆 Achievement: ${achievement.name}!`);
}

// Show funny message
function showFunnyMessage() {
    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    showMessage(randomMessage);
}

// Show message
function showMessage(text) {
    messageDisplay.textContent = text;
    messageDisplay.style.display = 'block';
    messageDisplay.style.animation = 'messageSlide 0.5s ease-out';
    
    setTimeout(() => {
        messageDisplay.style.animation = 'messageSlide 0.5s ease-out reverse';
        setTimeout(() => {
            messageDisplay.style.display = 'none';
        }, 500);
    }, 3000);
}

// Format number for display
function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'G';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Save game to localStorage
function saveGame() {
    localStorage.setItem('slovakSimulatorSave', JSON.stringify(gameState));
}

// Load game from localStorage
function loadGame() {
    const savedGame = localStorage.getItem('slovakSimulatorSave');
    if (savedGame) {
        const savedData = JSON.parse(savedGame);
        
        // Merge saved data with current gameState, preserving new upgrade structure
        gameState = {
            ...gameState,
            ...savedData,
            upgrades: {
                ...gameState.upgrades,
                ...savedData.upgrades
            }
        };
        
        // Ensure all upgrades have the new properties
        Object.keys(gameState.upgrades).forEach(key => {
            const upgrade = gameState.upgrades[key];
            if (!upgrade.name) {
                // Handle old upgrade format - map old keys to new names
                const upgradeNames = {
                    cursor: { name: "Zlatý Bažant Beer", icon: "🍺", description: "+1 dežo per click" },
                    slivovica: { name: "Homemade Slivovica", icon: "🥃", description: "+500 dežo per second" },
                    pub: { name: "Village Pub", icon: "🍻", description: "+5 dežo per second" },
                    distillery: { name: "Pálenka Distillery", icon: "🏭", description: "+25 dežo per second" },
                    festival: { name: "Drinking Festival", icon: "🎪", description: "+100 dežo per second" },
                    brewery: { name: "Slovak Brewery Empire", icon: "🏰", description: "+500 dežo per second" },
                    // Legacy mappings
                    restauracia: { name: "Village Dedko", icon: "👴", description: "+1000 dežo per second" },
                    fabrika: { name: "Slovnaft Refinery", icon: "🏭", description: "+2500 dežo per second" },
                    slovensko: { name: "High Tatras Tourism", icon: "⛰️", description: "+10M dežo per second" }
                };
                
                if (upgradeNames[key]) {
                    Object.assign(upgrade, upgradeNames[key]);
                }
            }
        });
        
        updateDisplay();
        updateUpgradeDisplay();
        
        // Restore achievements
        gameState.achievements.forEach(achievementId => {
            const achievement = achievementsList.find(a => a.id === achievementId);
            if (achievement) {
                const achievementElement = document.createElement('div');
                achievementElement.className = 'achievement';
                achievementElement.textContent = achievement.name;
                achievementElement.title = achievement.description;
                achievementsList_el.appendChild(achievementElement);
            }
        });
    }
}

// Auto-save every 10 seconds
setInterval(saveGame, 10000);

// Save on page unload
window.addEventListener('beforeunload', saveGame);

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    loadGame();
    generateUpgradeHTML(); // Generate upgrades dynamically
    updateDisplay();
    updateUpgradeDisplay();
    setupMenuToggles();
    
    // Show welcome message
    setTimeout(() => {
        showMessage("Welcome to Slovak Drunk Simulator! 🍺");
    }, 1000);
});

// Update upgrade affordability regularly
setInterval(updateUpgradeDisplay, 500);

// Menu toggle functionality
function setupMenuToggles() {
    const achievementsToggle = document.getElementById('achievements-toggle');
    const upgradesToggle = document.getElementById('upgrades-toggle');
    const achievementsMenu = document.getElementById('achievements-menu');
    const upgradesMenu = document.getElementById('upgrades-menu');

    achievementsToggle.addEventListener('click', () => {
        toggleMenu(achievementsToggle, achievementsMenu);
    });

    upgradesToggle.addEventListener('click', () => {
        toggleMenu(upgradesToggle, upgradesMenu);
    });
}

function toggleMenu(button, menu) {
    const isActive = button.classList.contains('active');
    const indicator = button.querySelector('.menu-indicator');
    
    if (isActive) {
        // Hide menu
        button.classList.remove('active');
        menu.style.display = 'none';
        if (indicator) indicator.textContent = '▼';
    } else {
        // Show menu
        button.classList.add('active');
        menu.style.display = 'block';
        if (indicator) indicator.textContent = '▲';
    }
}

// Firebase integration and authentication
let isLoggedIn = false;
let userData = null;
let leaderboardTimer = 30;
let leaderboardInterval = null;
let timerInterval = null;

// Import Firebase functions (will be available after module loads)
let firebaseAuth = null;

// Initialize Firebase integration
window.addEventListener('load', async () => {
    // Wait for Firebase module to load
    setTimeout(initializeFirebase, 1000);
});

async function initializeFirebase() {
    try {
        // Firebase functions will be available globally after module loads
        // Don't show auth modal immediately - let auth state observer handle it
        setupAuthListeners();
        startLeaderboardTimer();
        
        // Check if user is already logged in
        const currentUser = window.getCurrentUser();
        if (!currentUser) {
            // Only show auth modal if no user is logged in after a brief delay
            setTimeout(() => {
                if (!isLoggedIn) {
                    showAuthModal();
                }
            }, 2000);
        }
    } catch (error) {
        console.error('Firebase initialization error:', error);
        // Show auth modal on error
        showAuthModal();
    }
}

// Auth state change handler
window.addEventListener('authStateChanged', (event) => {
    const { user, loggedIn } = event.detail;
    isLoggedIn = loggedIn;
    userData = user;
    
    console.log('Auth state changed:', loggedIn ? 'Logged in' : 'Logged out', user);
    
    if (loggedIn) {
        hideAuthModal();
        showUserBar(user);
        loadUserGameData();
        updateLeaderboard();
        document.body.classList.add('logged-in');
        console.log('User authenticated, loading game data...');
    } else {
        showAuthModal();
        hideUserBar();
        document.body.classList.remove('logged-in');
        console.log('User not authenticated, showing auth modal');
    }
});

function setupAuthListeners() {
    // Login form
    document.getElementById('login-btn').addEventListener('click', async () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        if (!email || !password) {
            showAuthError('Please fill in all fields');
            return;
        }
        
        // Call Firebase login (assuming it's globally available)
        try {
            const result = await window.loginUser(email, password);
            if (!result.success) {
                showAuthError(result.error);
            }
        } catch (error) {
            showAuthError('Login failed. Please try again.');
        }
    });
    
    // Register form
    document.getElementById('register-btn').addEventListener('click', async () => {
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        
        if (!username || !email || !password) {
            showAuthError('Please fill in all fields');
            return;
        }
        
        if (password.length < 6) {
            showAuthError('Password must be at least 6 characters');
            return;
        }
        
        try {
            const result = await window.registerUser(email, password, username);
            if (!result.success) {
                showAuthError(result.error);
            }
        } catch (error) {
            showAuthError('Registration failed. Please try again.');
        }
    });
    
    // Toggle between login and register
    document.getElementById('show-register').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
        document.getElementById('auth-title').textContent = 'Register for Zjebaný Dežo Clicker';
        clearAuthError();
    });
    
    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('auth-title').textContent = 'Login to Zjebaný Dežo Clicker';
        clearAuthError();
    });
    
    // Logout button
    document.getElementById('logout-btn').addEventListener('click', async () => {
        try {
            await window.logoutUser();
        } catch (error) {
            console.error('Logout error:', error);
        }
    });
    
    // Leaderboard refresh
    document.getElementById('refresh-leaderboard').addEventListener('click', () => {
        updateLeaderboard();
        resetLeaderboardTimer();
    });
}

// Dynamic upgrade generation system
function generateUpgradeHTML() {
    const upgradesContainer = document.querySelector('.upgrades-grid');
    if (!upgradesContainer) return;

    // Clear existing upgrades
    upgradesContainer.innerHTML = '';

    // Generate upgrades from gameState
    Object.entries(gameState.upgrades).forEach(([upgradeKey, upgradeData]) => {
        const upgradeElement = document.createElement('div');
        upgradeElement.className = 'upgrade';
        upgradeElement.dataset.upgrade = upgradeKey;
        
        upgradeElement.innerHTML = `
            <div class="upgrade-icon">${upgradeData.icon}</div>
            <div class="upgrade-info">
                <h4>${upgradeData.name}</h4>
                <p>${upgradeData.description}</p>
                <div class="upgrade-cost">Cost: <span>${upgradeData.cost}</span> dežo</div>
                <div class="upgrade-owned">Owned: <span>${upgradeData.owned}</span></div>
            </div>
        `;
        
        // Add click event listener
        upgradeElement.addEventListener('click', () => buyUpgrade(upgradeKey));
        
        upgradesContainer.appendChild(upgradeElement);
    });

    // Update the upgradeElements reference
    window.upgradeElements = document.querySelectorAll('.upgrade');
}

// Function to add new upgrades easily
function addUpgrade(key, upgradeData) {
    gameState.upgrades[key] = {
        owned: 0,
        cost: upgradeData.cost,
        power: upgradeData.power,
        costMultiplier: upgradeData.costMultiplier || 1.15,
        name: upgradeData.name,
        icon: upgradeData.icon,
        description: upgradeData.description
    };
    
    // Regenerate the upgrades display
    generateUpgradeHTML();
    updateUpgradeDisplay();
    
    console.log(`Added new upgrade: ${upgradeData.name}`);
}

// Example function to add a new upgrade (you can call this anytime)
function addNewUpgrade() {
    // Example: Add a new upgrade
    const newUpgrade = {
        cost: 250000,
        power: 1000,
        name: "International Drinking Championship",
        icon: "🏆",
        description: "+1000 dežo per second"
    };
    
    addUpgrade('championship', newUpgrade);
}

// Make addUpgrade available globally for easy access
window.addUpgrade = addUpgrade;
window.addNewUpgrade = addNewUpgrade;

// Helper functions for adding upgrades via console
// These functions are available globally for easy upgrade management

// Add multiple predefined upgrades at once
window.addPremiumUpgrades = function() {
    const premiumUpgrades = [
        {
            key: 'meciar',
            data: {
                cost: 75000000000,
                power: 750000000,
                name: "Vladimír Mečiar Legacy",
                icon: "👑",
                description: "+750M dežo per second"
            }
        },
        {
            key: 'eurovision',
            data: {
                cost: 150000000000,
                power: 1500000000,
                name: "Eurovision Slovakia Entry",
                icon: "�",
                description: "+1.5B dežo per second"
            }
        },
        {
            key: 'hockey',
            data: {
                cost: 300000000000,
                power: 3000000000,
                name: "Slovak Hockey Legends",
                icon: "🏒",
                description: "+3B dežo per second"
            }
        },
        {
            key: 'bojnice',
            data: {
                cost: 500000000000,
                power: 5000000000,
                name: "Bojnice Castle Magic",
                icon: "�",
                description: "+5B dežo per second"
            }
        },
        {
            key: 'kosice',
            data: {
                cost: 1000000000000,
                power: 10000000000,
                name: "Košice Steel Empire",
                icon: "⚒️",
                description: "+10B dežo per second"
            }
        }
    ];

    premiumUpgrades.forEach(upgrade => {
        addUpgrade(upgrade.key, upgrade.data);
    });
    
    console.log('Added premium Slovak meme upgrades! Check the upgrades menu.');
};

// Quick upgrade template
window.quickAddUpgrade = function(name, cost, power, icon, description) {
    const key = name.toLowerCase().replace(/\s+/g, '_');
    addUpgrade(key, {
        cost: cost,
        power: power,
        name: name,
        icon: icon || "🎯",
        description: description || `+${power} dežo per second`
    });
    console.log(`Added ${name}!`);
};

// List all current upgrades
window.listUpgrades = function() {
    console.log('Current upgrades:');
    Object.entries(gameState.upgrades).forEach(([key, data]) => {
        console.log(`${key}: ${data.name} - ${data.icon} - Cost: ${data.cost} - Power: ${data.power}`);
    });
};

// Console help
window.upgradeHelp = function() {
    console.log(`
🍺 UPGRADE COMMANDS:
    
addUpgrade(key, data) - Add a custom upgrade
Example: addUpgrade('superdrink', {
    cost: 1000,
    power: 50,
    name: "Super Slovak Drink",
    icon: "⚡",
    description: "+50 dežo per second"
});

quickAddUpgrade(name, cost, power, icon, description) - Quick add
Example: quickAddUpgrade("Epic Brewery", 100000, 500, "🏭", "+500 dežo per second");

addPremiumUpgrades() - Add 3 premium upgrades
addNewUpgrade() - Add example championship upgrade
listUpgrades() - List all current upgrades
upgradeHelp() - Show this help

Try it: addPremiumUpgrades()
    `);
};

// Show help on load
console.log('🍺 Zjebaný Dežo Clicker loaded! Type upgradeHelp() for upgrade commands.');

// Show auth modal
function showAuthModal() {
    document.getElementById('auth-modal').style.display = 'flex';
}

function hideAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
}

function showUserBar(user) {
    document.getElementById('user-bar').style.display = 'block';
    
    // Try to get username from Firebase database or use email as fallback
    if (user.uid && window.getCurrentUser) {
        // Load user data to get username
        const database = firebase.database();
        database.ref('users/' + user.uid).once('value').then((snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                const displayName = userData.username || user.email || 'User';
                document.getElementById('user-name').textContent = `Welcome, ${displayName}!`;
            } else {
                document.getElementById('user-name').textContent = `Welcome, ${user.email}!`;
            }
        }).catch(() => {
            document.getElementById('user-name').textContent = `Welcome, ${user.email}!`;
        });
    } else {
        document.getElementById('user-name').textContent = `Welcome, ${user.email}!`;
    }
}

function hideUserBar() {
    document.getElementById('user-bar').style.display = 'none';
}

function showAuthError(message) {
    document.getElementById('auth-error').textContent = message;
}

function clearAuthError() {
    document.getElementById('auth-error').textContent = '';
}

async function loadUserGameData() {
    try {
        const savedData = await window.loadGameData();
        if (savedData) {
            // Merge saved data with current gameState, preserving new upgrade structure
            gameState = {
                ...gameState,
                ...savedData,
                upgrades: {
                    ...gameState.upgrades,
                    ...savedData.upgrades
                }
            };
            
            // Regenerate upgrades with new data
            generateUpgradeHTML();
            updateDisplay();
            updateUpgradeDisplay();
            
            // Restore achievements
            gameState.achievements.forEach(achievementId => {
                const achievement = achievementsList.find(a => a.id === achievementId);
                if (achievement) {
                    const achievementElement = document.createElement('div');
                    achievementElement.className = 'achievement';
                    achievementElement.textContent = achievement.name;
                    achievementElement.title = achievement.description;
                    achievementsList_el.appendChild(achievementElement);
                }
            });
            
            showMessage("Game data loaded from cloud! 🎮");
        }
    } catch (error) {
        console.error('Load error:', error);
    }
}

// Save game data to Firebase periodically
setInterval(async () => {
    if (isLoggedIn && userData) {
        try {
            await window.saveGameData({
                ...gameState,
                userData: userData
            });
            console.log('Game auto-saved to cloud');
        } catch (error) {
            console.error('Auto-save error:', error);
        }
    }
}, 15000); // Auto-save every 15 seconds

// Leaderboard functions
async function updateLeaderboard() {
    try {
        const leaderboard = await window.getLeaderboard();
        displayLeaderboard(leaderboard);
    } catch (error) {
        console.error('Leaderboard update error:', error);
        document.getElementById('leaderboard-list').innerHTML = 
            '<div class="leaderboard-loading">Failed to load leaderboard</div>';
    }
}

function displayLeaderboard(leaderboard) {
    const container = document.getElementById('leaderboard-list');
    
    if (leaderboard.length === 0) {
        container.innerHTML = '<div class="leaderboard-loading">No players yet. Be the first!</div>';
        return;
    }
    
    const currentUserUid = userData?.uid;
    
    container.innerHTML = leaderboard.map((player, index) => {
        const isCurrentUser = player.uid === currentUserUid;
        return `
            <div class="leaderboard-item ${isCurrentUser ? 'current-user' : ''}">
                <span class="leaderboard-rank">#${index + 1}</span>
                <span class="leaderboard-username">${player.username}</span>
                <span class="leaderboard-score">${formatNumber(player.totalDezos)} dežo</span>
            </div>
        `;
    }).join('');
}

function startLeaderboardTimer() {
    // Update leaderboard every 30 seconds
    leaderboardInterval = setInterval(() => {
        if (isLoggedIn) {
            updateLeaderboard();
            resetLeaderboardTimer();
        }
    }, 30000);
    
    // Update timer display every second
    timerInterval = setInterval(() => {
        leaderboardTimer--;
        document.getElementById('leaderboard-timer').textContent = `Next update: ${leaderboardTimer}s`;
        
        if (leaderboardTimer <= 0) {
            leaderboardTimer = 30;
        }
    }, 1000);
}

function resetLeaderboardTimer() {
    leaderboardTimer = 30;
    document.getElementById('leaderboard-timer').textContent = `Next update: ${leaderboardTimer}s`;
}
