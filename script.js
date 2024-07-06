document.addEventListener('DOMContentLoaded', () => {
    generateBingoCard();
});

function generateBingoCard() {
    const bingoCard = document.getElementById('bingo-card');
    bingoCard.innerHTML = '';
    
    const predefinedValues = [
        "Egg", "Huh?", "Bro", "'Mentions Antarctica'", "Smoke",
        "Duty", "Weekend", "'Sings'", "'Unwashed clothes'", "Girlfriend",
        "'Curses'", "Gazebo", "Stoppa", "Stop Man", "Dude",
        "'Circle Game'", "'Something on your shirt'", "Hello Brother", "'Somebody is late'", "'Gets caught putting something on head'",
        "Cold", "'Goes 5 min without noticing something on head'", "'You take out the trash'", "'You demo with Chef'", "Free"
    ];
    
    shuffle(predefinedValues);
    
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');
        
        const content = document.createElement('div');
        const text = (i === 12) ? "FREE" : predefinedValues[i];
        content.textContent = text;
        content.setAttribute('data-text', text); // Set the data-text attribute

        cell.appendChild(content);
        cell.onclick = () => cell.classList.toggle('marked');
        
        bingoCard.appendChild(cell);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
