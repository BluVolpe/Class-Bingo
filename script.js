document.addEventListener('DOMContentLoaded', () => {
    checkShuffle();
});

/**
 * Checks if the bingo card was shuffled today.
 * If it was, it displays an alert and generates the bingo card without shuffling.
 * If it wasn't, it stores today's date in local storage and shuffles the card.
 */
function checkShuffle() {
    const lastShuffle = localStorage.getItem('lastShuffle');
    const today = new Date().toISOString().split('T')[0];

    if (lastShuffle === today) {
        generateBingoCard(); // Generate the card without shuffling
    } else {
        localStorage.setItem('lastShuffle', today);
        shuffleAndGenerateBingoCard();
    }
}

/**
 * Shuffles the predefined values array and generates the bingo card.
 */
function shuffleAndGenerateBingoCard() {
    const predefinedValues = [
        "Egg", "Huh?", "Bro", "'Mentions Antarctica'", "Smoke",
        "Duty", "Weekend", "'Sings'", "'Unwashed clothes'", "Girlfriend",
        "'Curses'", "Gazebo", "Stoppa", "Stop Man", "Dude",
        "'Circle Game'", "'Something on your shirt'", "Hello Brother", "'Somebody is late'", "'Gets caught putting something on head'",
        "Cold", "'Goes 5 min without noticing something on head'", "'You take out the trash'", "'You demo with Chef'", "Free"
    ];

    shuffle(predefinedValues);
    generateBingoCard(predefinedValues);
}

/**
 * Generates the bingo card with the given values.
 * If no values are provided, it uses the default predefined values.
 * @param {Array} values - Array of values to populate the bingo card.
 */
function generateBingoCard(values = null) {
    const bingoCard = document.getElementById('bingo-card');
    bingoCard.innerHTML = ''; // Clear any existing content

    const predefinedValues = values || [
        "Egg", "Huh?", "Bro", "'Mentions Antarctica'", "Smoke",
        "Duty", "Weekend", "'Sings'", "'Unwashed clothes'", "Girlfriend",
        "'Curses'", "Gazebo", "Stoppa", "Stop Man", "Dude",
        "'Circle Game'", "'Something on your shirt'", "Hello Brother", "'Somebody is late'", "'Gets caught putting something on head'",
        "Cold", "'Goes 5 min without noticing something on head'", "'You take out the trash'", "'You demo with Chef'", "Free"
    ];

    // Create 25 cells for the bingo card
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');

        const content = document.createElement('div');
        const text = (i === 12) ? "FREE" : predefinedValues[i]; // Center cell is "FREE"
        content.textContent = text;
        content.setAttribute('data-text', text); // Set the data-text attribute

        cell.appendChild(content);
        cell.onclick = () => cell.classList.toggle('marked'); // Toggle 'marked' class on click

        bingoCard.appendChild(cell);
    }
}

/**
 * Shuffles an array in place.
 * Uses the Fisher-Yates (Knuth) shuffle algorithm.
 * @param {Array} array - Array to be shuffled.
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}
