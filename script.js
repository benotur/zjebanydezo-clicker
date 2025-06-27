// Game state
const gameState = {
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
        dedko: { owned: 0, cost: 100000, power: 1000, costMultiplier: 1.15, name: "Village Dedko", icon: "👴", description: "+1000 dežo per second" },
        slovnaft: { owned: 0, cost: 250000, power: 2500, costMultiplier: 1.15, name: "Slovnaft Refinery", icon: "🏭", description: "+2500 dežo per second" },
        koliba: { owned: 0, cost: 500000, power: 5000, costMultiplier: 1.15, name: "Mountain Koliba", icon: "🏔️", description: "+5000 dežo per second" },
        pagac: { owned: 0, cost: 1000000, power: 10000, costMultiplier: 1.15, name: "Richard Pagáč", icon: "🎭", description: "+10000 dežo per second" },
        marian: { owned: 0, cost: 2500000, power: 25000, costMultiplier: 1.15, name: "Marián Čekovský", icon: "📺", description: "+25000 dežo per second" },
        tesco: { owned: 0, cost: 5000000, power: 50000, costMultiplier: 1.15, name: "Tesco Value Goods", icon: "🛒", description: "+50000 dežo per second" },
        helenka: { owned: 0, cost: 10000000, power: 100000, costMultiplier: 1.15, name: "Helenka Vondráčková", icon: "🎤", description: "+100000 dežo per second" },
        slovan: { owned: 0, cost: 25000000, power: 250000, costMultiplier: 1.15, name: "ŠK Slovan Support", icon: "⚽", description: "+250000 dežo per second" },
        csob: { owned: 0, cost: 50000000, power: 500000, costMultiplier: 1.15, name: "ČSOB Banking", icon: "🏦", description: "+500000 dežo per second" },
        danko: { owned: 0, cost: 100000000, power: 1000000, costMultiplier: 1.15, name: "Danko's Politics", icon: "🎪", description: "+1M dežo per second" },
        lidl: { owned: 0, cost: 250000000, power: 2500000, costMultiplier: 1.15, name: "Lidl Shopping Spree", icon: "🛍️", description: "+2.5M dežo per second" },
        sme: { owned: 0, cost: 500000000, power: 5000000, costMultiplier: 1.15, name: "SME Newspaper Drama", icon: "📰", description: "+5M dežo per second" },
        tatry: { owned: 0, cost: 1000000000, power: 10000000, costMultiplier: 1.15, name: "High Tatras Tourism", icon: "⛰️", description: "+10M dežo per second" },
        euro: { owned: 0, cost: 2500000000, power: 25000000, costMultiplier: 1.15, name: "Euro Adoption Chaos", icon: "💶", description: "+25M dežo per second" },
        velvet: { owned: 0, cost: 5000000000, power: 50000000, costMultiplier: 1.15, name: "Velvet Revolution", icon: "🌹", description: "+50M dežo per second" },
        president: { owned: 0, cost: 10000000000, power: 100000000, costMultiplier: 1.15, name: "Presidential Palace", icon: "🏰", description: "+100M dežo per second" },
        bratislava: { owned: 0, cost: 25000000000, power: 250000000, costMultiplier: 1.15, name: "Bratislava Castle", icon: "🏛️", description: "+250M dežo per second" },
        slovakia: { owned: 0, cost: 50000000000, power: 500000000, costMultiplier: 1.15, name: "Entire Slovakia", icon: "🇸🇰", description: "+500M dežo per second" },
        universe: { owned: 0, cost: 100000000000, power: 1000000000, costMultiplier: 1.15, name: "Slovak Universe Empire", icon: "🌌", description: "+1B dežo per second" }
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
        
        if (!upgradeData) {
            console.warn(`Upgrade data not found for ${upgradeType}`);
            return; // Skip if upgrade doesn't exist
        }
        
        const costElement = upgrade.querySelector('.upgrade-cost span');
        const ownedElement = upgrade.querySelector('.upgrade-owned span');
        
        // More robust element checking for Safari mobile
        if (costElement && typeof upgradeData.cost !== 'undefined') {
            costElement.textContent = formatNumber(upgradeData.cost);
        }
        if (ownedElement && typeof upgradeData.owned !== 'undefined') {
            ownedElement.textContent = upgradeData.owned;
        }
        
        // Check if affordable with additional validation
        if (typeof gameState.zjebanydezo === 'number' && typeof upgradeData.cost === 'number') {
            if (gameState.zjebanydezo >= upgradeData.cost) {
                upgrade.classList.add('affordable');
            } else {
                upgrade.classList.remove('affordable');
            }
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
    try {
        const savedGame = localStorage.getItem('slovakSimulatorSave');
        if (savedGame) {
            const savedData = JSON.parse(savedGame);
            
            // Ensure saved data is valid
            if (savedData && typeof savedData === 'object') {
                // Merge saved data with current gameState, preserving new upgrade structure
                Object.assign(gameState, {
                    ...savedData,
                    upgrades: {
                        ...gameState.upgrades,
                        ...savedData.upgrades
                    }
                });
                
                // Ensure data integrity after loading
                ensureUpgradeDataIntegrity();
                
                updateDisplay();
                
                // Restore achievements
                if (gameState.achievements && Array.isArray(gameState.achievements)) {
                    gameState.achievements.forEach(achievementId => {
                        const achievement = achievementsList.find(a => a.id === achievementId);
                        if (achievement) {
                            const achievementElement = document.createElement('div');
                            achievementElement.className = 'achievement';
                            achievementElement.textContent = achievement.name;
                            achievementElement.title = achievement.description;
                            if (achievementsList_el) {
                                achievementsList_el.appendChild(achievementElement);
                            }
                        }
                    });
                }
            }
        }
    } catch (error) {
        console.error('Error loading game data:', error);
        // Ensure data integrity even if loading fails
        ensureUpgradeDataIntegrity();
    }
}

// Auto-save every 10 seconds
setInterval(saveGame, 10000);

// Save on page unload
window.addEventListener('beforeunload', saveGame);

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

// Dynamic upgrade generation system
function generateUpgradeHTML() {
    const upgradesGrid = document.querySelector('.upgrades-grid');
    if (!upgradesGrid) {
        console.warn('Upgrades grid not found, retrying...');
        setTimeout(generateUpgradeHTML, 100);
        return;
    }

    upgradesGrid.innerHTML = ''; // Clear existing content

    Object.entries(gameState.upgrades).forEach(([key, upgrade]) => {
        // Additional validation for Safari mobile
        if (!upgrade || typeof upgrade !== 'object') {
            console.warn(`Invalid upgrade data for ${key}:`, upgrade);
            return;
        }
        
        const upgradeElement = document.createElement('div');
        upgradeElement.className = 'upgrade';
        upgradeElement.dataset.upgrade = key;

        // Ensure all required properties exist with fallbacks
        const name = upgrade.name || 'Unknown Upgrade';
        const description = upgrade.description || 'No description';
        const icon = upgrade.icon || '❓';
        const cost = upgrade.cost || 0;
        const owned = upgrade.owned || 0;

        upgradeElement.innerHTML = `
            <div class="upgrade-icon">${icon}</div>
            <div class="upgrade-info">
                <h4>${name}</h4>
                <p>${description}</p>
                <div class="upgrade-cost">Cost: <span>${formatNumber(cost)}</span></div>
                <div class="upgrade-owned">Owned: <span>${owned}</span></div>
            </div>
        `;

        upgradeElement.addEventListener('click', () => buyUpgrade(key));
        upgradesGrid.appendChild(upgradeElement);
    });
}

// Function to add new upgrades easily
function addUpgrade(key, upgradeData) {
    gameState.upgrades[key] = {
        owned: 0,
        cost: upgradeData.cost || 1000,
        power: upgradeData.power || 10,
        costMultiplier: upgradeData.costMultiplier || 1.15,
        name: upgradeData.name || "New Upgrade",
        icon: upgradeData.icon || "🔧",
        description: upgradeData.description || "A new upgrade"
    };
    
    // Regenerate the upgrade HTML
    generateUpgradeHTML();
    updateUpgradeDisplay();
    
    console.log(`Added upgrade: ${upgradeData.name}`);
}

// Helper functions for adding upgrades via console
window.addUpgrade = addUpgrade;

window.quickAddUpgrade = function(name, cost, power, icon, description) {
    const key = name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    addUpgrade(key, { name, cost, power, icon, description });
};

window.listUpgrades = function() {
    console.log('Current upgrades:');
    Object.entries(gameState.upgrades).forEach(([key, upgrade]) => {
        console.log(`${key}: ${upgrade.name} (${upgrade.icon}) - Cost: ${upgrade.cost}, Power: ${upgrade.power}, Owned: ${upgrade.owned}`);
    });
};

window.upgradeHelp = function() {
    console.log(`
🍺 Zjebaný Dežo Clicker - Upgrade Commands:

addUpgrade(key, {name, cost, power, icon, description}) - Add a new upgrade
quickAddUpgrade(name, cost, power, icon, description) - Quick add with auto-generated key
listUpgrades() - List all current upgrades
upgradeHelp() - Show this help

Example:
quickAddUpgrade("Bratislava Taxi", 50000, 500, "🚕", "+500 dežo per second")
`);
};

// Firebase integration and authentication
let isLoggedIn = false;
let userData = null;
let leaderboardTimer = 30;
let leaderboardInterval = null;
let timerInterval = null;

// Initialize Firebase integration
window.addEventListener('load', async () => {
    await initializeFirebase();
});

async function initializeFirebase() {
    if (typeof window.getCurrentUser === 'function') {
        const user = window.getCurrentUser();
        if (user) {
            isLoggedIn = true;
            userData = user;
            showUserBar(user);
            hideAuthModal();
            
            // Load game data from Firebase
            const savedGameData = await window.loadGameData();
            if (savedGameData) {
                Object.assign(gameState, savedGameData);
                updateDisplay();
                generateUpgradeHTML();
                updateUpgradeDisplay();
            }
            
            // Start leaderboard updates
            startLeaderboardUpdates();
        } else {
            showAuthModal();
        }
        
        setupAuthListeners();
    }
}

// Auth state change handler
window.addEventListener('authStateChanged', (event) => {
    const { user, loggedIn } = event.detail;
    
    if (loggedIn && user) {
        isLoggedIn = true;
        userData = user;
        showUserBar(user);
        hideAuthModal();
        startLeaderboardUpdates();
        
        // Save current game state to Firebase
        window.saveGameData(gameState);
    } else {
        isLoggedIn = false;
        userData = null;
        showAuthModal();
        stopLeaderboardUpdates();
    }
});

function setupAuthListeners() {
    // Login form
    document.getElementById('login-btn').addEventListener('click', async () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const errorDiv = document.getElementById('auth-error');
        
        if (!email || !password) {
            errorDiv.textContent = 'Please fill in all fields';
            return;
        }
        
        const result = await window.loginUser(email, password);
        if (result.success) {
            errorDiv.textContent = '';
        } else {
            errorDiv.textContent = result.error;
        }
    });
    
    // Register form
    document.getElementById('register-btn').addEventListener('click', async () => {
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const errorDiv = document.getElementById('auth-error');
        
        if (!username || !email || !password) {
            errorDiv.textContent = 'Please fill in all fields';
            return;
        }
        
        const result = await window.registerUser(email, password, username);
        if (result.success) {
            errorDiv.textContent = '';
        } else {
            errorDiv.textContent = result.error;
        }
    });
    
    // Form toggles
    document.getElementById('show-register').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
        document.getElementById('auth-title').textContent = 'Register for Zjebaný Dežo Clicker';
    });
    
    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('auth-title').textContent = 'Login to Zjebaný Dežo Clicker';
    });
    
    // Logout
    document.getElementById('logout-btn').addEventListener('click', async () => {
        await window.logoutUser();
    });
    
    // Refresh leaderboard
    document.getElementById('refresh-leaderboard').addEventListener('click', refreshLeaderboard);
}

function showAuthModal() {
    document.getElementById('auth-modal').style.display = 'flex';
}

function hideAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
}

function showUserBar(user) {
    document.getElementById('user-name').textContent = `Welcome, ${user.email}!`;
    document.getElementById('user-bar').style.display = 'block';
    document.body.style.paddingTop = '50px';
}

function startLeaderboardUpdates() {
    refreshLeaderboard();
    
    leaderboardInterval = setInterval(refreshLeaderboard, 30000);
    
    leaderboardTimer = 30;
    timerInterval = setInterval(() => {
        leaderboardTimer--;
        document.getElementById('leaderboard-timer').textContent = `Next update: ${leaderboardTimer}s`;
        
        if (leaderboardTimer <= 0) {
            leaderboardTimer = 30;
        }
    }, 1000);
}

function stopLeaderboardUpdates() {
    if (leaderboardInterval) {
        clearInterval(leaderboardInterval);
        leaderboardInterval = null;
    }
    
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

async function refreshLeaderboard() {
    if (!isLoggedIn) return;
    
    try {
        // Save current progress first
        await window.saveGameData(gameState);
        
        const leaderboard = await window.getLeaderboard();
        const leaderboardList = document.getElementById('leaderboard-list');
        
        if (leaderboard.length === 0) {
            leaderboardList.innerHTML = '<div class="leaderboard-loading">No players yet...</div>';
            return;
        }
        
        leaderboardList.innerHTML = leaderboard.map((player, index) => {
            const isCurrentUser = userData && player.uid === userData.uid;
            return `
                <div class="leaderboard-item ${isCurrentUser ? 'current-user' : ''}">
                    <span class="leaderboard-rank">${index + 1}.</span>
                    <span class="leaderboard-username">${player.username}</span>
                    <span class="leaderboard-score">${formatNumber(player.totalDezos)}</span>
                </div>
            `;
        }).join('');
        
    } catch (error) {
        console.error('Failed to refresh leaderboard:', error);
        document.getElementById('leaderboard-list').innerHTML = '<div class="leaderboard-loading">Failed to load leaderboard</div>';
    }
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    // Additional delay for mobile Safari compatibility
    setTimeout(() => {
        // Handle mobile Safari quirks
        handleMobileSafariQuirks();
        
        // Ensure data integrity first
        ensureUpgradeDataIntegrity();
        
        loadGame();
        generateUpgradeHTML();
        updateDisplay();
        
        // Extra delay for upgrade display on mobile Safari
        setTimeout(() => {
            updateUpgradeDisplay();
        }, isMobileSafari() ? 200 : 100);
        
        setupMenuToggles();
        
        // Show welcome message
        setTimeout(() => {
            showMessage("Welcome to Slovak Drunk Simulator! 🍺");
        }, 1000);
    }, isMobileSafari() ? 100 : 50);
});

// Update upgrade affordability regularly
setInterval(updateUpgradeDisplay, 500);

// Show help on load
console.log('🍺 Zjebaný Dežo Clicker loaded! Type upgradeHelp() for upgrade commands.');

// Safari mobile compatibility check
function ensureUpgradeDataIntegrity() {
    Object.keys(gameState.upgrades).forEach(key => {
        const upgrade = gameState.upgrades[key];
        if (!upgrade || typeof upgrade !== 'object') {
            console.warn(`Fixing corrupted upgrade data for ${key}`);
            // Reset to default if corrupted
            gameState.upgrades[key] = {
                owned: 0,
                cost: 1000,
                power: 10,
                costMultiplier: 1.15,
                name: "Unknown Upgrade",
                icon: "❓",
                description: "Upgrade data corrupted"
            };
        } else {
            // Ensure all required properties exist
            if (typeof upgrade.owned !== 'number') upgrade.owned = 0;
            if (typeof upgrade.cost !== 'number') upgrade.cost = 1000;
            if (typeof upgrade.power !== 'number') upgrade.power = 10;
            if (typeof upgrade.costMultiplier !== 'number') upgrade.costMultiplier = 1.15;
            if (typeof upgrade.name !== 'string') upgrade.name = "Unknown Upgrade";
            if (typeof upgrade.icon !== 'string') upgrade.icon = "❓";
            if (typeof upgrade.description !== 'string') upgrade.description = "No description";
        }
    });
}

// Mobile Safari detection and handling
function isMobileSafari() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);
}

function handleMobileSafariQuirks() {
    if (isMobileSafari()) {
        // Force repaint of upgrade elements
        setTimeout(() => {
            const upgrades = document.querySelectorAll('.upgrade');
            upgrades.forEach(upgrade => {
                upgrade.style.transform = 'translateZ(0)';
                upgrade.style.webkitTransform = 'translateZ(0)';
            });
        }, 200);
        
        // Additional delay for upgrade display updates
        const originalUpdateUpgradeDisplay = updateUpgradeDisplay;
        updateUpgradeDisplay = function() {
            setTimeout(originalUpdateUpgradeDisplay, 10);
        };
        
        // Force upgrade regeneration every 30 seconds on mobile Safari to prevent display issues
        setInterval(() => {
            if (document.querySelector('.upgrades-grid')) {
                generateUpgradeHTML();
                updateUpgradeDisplay();
            }
        }, 30000);
    }
}

// Ensure upgrade data integrity on load
ensureUpgradeDataIntegrity();

// Apply Mobile Safari handling
handleMobileSafariQuirks();
