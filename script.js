// Game state
let gameState = {
    halusky: 0,
    totalHalusky: 0,
    haluskyPerSecond: 0,
    clickPower: 1,
    upgrades: {
        cursor: { owned: 0, cost: 10, power: 1, costMultiplier: 1.15 },
        babicka: { owned: 0, cost: 100, power: 1, costMultiplier: 1.15 },
        kucharka: { owned: 0, cost: 500, power: 5, costMultiplier: 1.15 },
        restauracia: { owned: 0, cost: 2500, power: 25, costMultiplier: 1.15 },
        fabrika: { owned: 0, cost: 10000, power: 100, costMultiplier: 1.15 },
        slovensko: { owned: 0, cost: 50000, power: 500, costMultiplier: 1.15 }
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
    "Dežo is the local drinking champion"
];

// Achievement definitions
const achievementsList = [
    { id: 'first_click', name: 'First Drink!', description: 'Made your first click', condition: () => gameState.totalHalusky >= 1 },
    { id: 'hundred_points', name: 'Getting Tipsy!', description: 'Earned 100 zjebaný dežo', condition: () => gameState.totalHalusky >= 100 },
    { id: 'first_apartment', name: 'Panel Life Drinking!', description: 'Bought your first panel apartment', condition: () => gameState.upgrades.babicka.owned >= 1 },
    { id: 'thousand_points', name: 'Village Drunk!', description: 'Earned 1000 zjebaný dežo', condition: () => gameState.totalHalusky >= 1000 },
    { id: 'ten_apartments', name: 'Sídlisko Alcoholic!', description: 'Own 10 panel apartments', condition: () => gameState.upgrades.babicka.owned >= 10 },
    { id: 'first_factory', name: 'Industrial Drunk!', description: 'Own VSŽ Košice steel plant!', condition: () => gameState.upgrades.fabrika.owned >= 1 },
    { id: 'tatras_owner', name: 'Mountain Drinking King!', description: 'Own High Tatras tourism!', condition: () => gameState.upgrades.slovensko.owned >= 1 },
    { id: 'million_points', name: 'Slovak Drinking Legend!', description: 'Earned 1 million zjebaný dežo!', condition: () => gameState.totalHalusky >= 1000000 }
];

// DOM elements
const haluskyButton = document.getElementById('halusky-button');
const haluskyCount = document.getElementById('halusky-count');
const haluskyPerSecondDisplay = document.getElementById('halusky-per-second');
const totalHaluskyDisplay = document.getElementById('total-halusky');
const clickEffect = document.getElementById('click-effect');
const upgradeElements = document.querySelectorAll('.upgrade');
const achievementsList_el = document.getElementById('achievements-list');
const messageDisplay = document.getElementById('message-display');

// Event listeners
haluskyButton.addEventListener('click', clickHalusky);

upgradeElements.forEach(upgrade => {
    upgrade.addEventListener('click', () => buyUpgrade(upgrade.dataset.upgrade));
});

// Main click function
function clickHalusky(event) {
    gameState.halusky += gameState.clickPower;
    gameState.totalHalusky += gameState.clickPower;
    
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
    const rect = haluskyButton.getBoundingClientRect();
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
    
    if (gameState.halusky >= upgrade.cost) {
        gameState.halusky -= upgrade.cost;
        upgrade.owned++;
        
        // Apply upgrade effect
        if (upgradeType === 'cursor') {
            gameState.clickPower += upgrade.power;
        } else {
            gameState.haluskyPerSecond += upgrade.power;
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

// Passive income (halusky per second)
setInterval(() => {
    if (gameState.haluskyPerSecond > 0) {
        gameState.halusky += gameState.haluskyPerSecond;
        gameState.totalHalusky += gameState.haluskyPerSecond;
        updateDisplay();
        
        if (Math.random() < 0.05) { // 5% chance every second
            checkAchievements();
        }
    }
}, 1000);

// Update main display
function updateDisplay() {
    haluskyCount.textContent = formatNumber(Math.floor(gameState.halusky));
    haluskyPerSecondDisplay.textContent = formatNumber(gameState.haluskyPerSecond);
    totalHaluskyDisplay.textContent = formatNumber(Math.floor(gameState.totalHalusky));
}

// Update upgrade displays
function updateUpgradeDisplay() {
    upgradeElements.forEach(upgrade => {
        const upgradeType = upgrade.dataset.upgrade;
        const upgradeData = gameState.upgrades[upgradeType];
        
        const costElement = upgrade.querySelector('.upgrade-cost span');
        const ownedElement = upgrade.querySelector('.upgrade-owned span');
        
        costElement.textContent = formatNumber(upgradeData.cost);
        ownedElement.textContent = upgradeData.owned;
        
        // Check if affordable
        if (gameState.halusky >= upgradeData.cost) {
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
        gameState = { ...gameState, ...JSON.parse(savedGame) };
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
    updateDisplay();
    updateUpgradeDisplay();
    
    // Show welcome message
    setTimeout(() => {
        showMessage("Welcome to Slovak Drunk Simulator! �");
    }, 1000);
});

// Update upgrade affordability regularly
setInterval(updateUpgradeDisplay, 500);
