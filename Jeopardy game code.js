const start = document.querySelector('button'); // DOM selector for start button
const gameBoard = document.getElementById('gameboard'); // DOM selector for table
const endButton = document.createElement('button'); // Button for endgng game at any time
const scoreBoard = document.getElementById('score'); // Scoreboard DOM selector
scoreBoard.innerText = 0; // Will be updated later as you get questions right

/* This function shuffles both the categories and the clues in order to generate random distribution.
This is based on an algorithm called Fisher Yates.*/
function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter); // Generates a random index
        counter--; // Decrease counter by 1
        let temp = array[counter]; // And swap the last element with it
        array[counter] = array[index];//--> index NOW equals whatever the random number is
        array[index] = temp; //and now that new index number for U.S. history NOW equals 'temp'
    };
    return array;
};
function shuffleCategories(array) {
    shuffle(array);
    // Shuffles the clues in the categories, same code as above
    for (let a = 0; a < array.length; a++){
        shuffle(array[a].clues)
    };
    return array.slice(0, 6); // Returns only 6 categories
};
// End-game function for end-game button
function endGame() {
    if (confirm('Are you sure you want to quit?')) {
    }
    // Keep playing
    else {
        return
    }
    $('thead').remove();
    $('tbody').remove();
    scoreBoard.innerText = '0';
    endButton.remove();
    start.addEventListener('click', startGame);
};
// Start game button
start.addEventListener('click', startGame);
function startGame() {
    const shuffledCategories = shuffleCategories(categories); // Variable stores the return value of shuffleCategories
    const head = document.createElement('thead');
    const body = document.createElement('tbody');
    const categoryRow = document.createElement('tr');
    endButton.innerText = 'Quit game';
    // Sets the categories
    for (let a = 0; a < shuffledCategories.length; a++){
        const categoryCells = document.createElement('th');
        categoryCells.classList = 'cell category'
        categoryCells.innerText = `${shuffledCategories[a].category}`;
        categoryRow.append(categoryCells);
        head.append(categoryRow);
    };
    // Set the questions and answers
    for (let a = 0; a < 5; a++){
        const row = document.createElement('tr');
        $('tbody').append(row);
        for (let b = 0; b < 6; b++){
            const cell = document.createElement('td');
            const money = a + 1; 
            cell.innerText = `$${money * 100}`; // Sets the dollar amount for the cells
            cell.classList = 'cell clue'; // For CSS purposes
            row.append(cell);
            cell.setAttribute('id', `${b}-${a}`);
            cell.setAttribute('question', `${shuffledCategories[b].clues[a].question}`); // Sets the question in the HTML
            cell.setAttribute('answer', `${shuffledCategories[b].clues[a].answer}`); // Sets the answer in the HTML
            cell.addEventListener('click', handleClick);
        };        
    };
    gameBoard.append(head);
    gameBoard.append(body);
    start.removeEventListener('click', startGame);
    endButton.addEventListener('click', endGame);
    document.body.append(endButton);
};

// Opens the clue and displays the question in a separate div.
let openClue = false;
function handleClick(event) {
    if (openClue) { // prevents opening another clue before you answer the current one
        return;
    }
    openClue = true;
    // Retrives the coordinates from the element ID to select the
    // correct question from the categories array
    const clickedClue = event.target;
    let coords = clickedClue.id.split('-'); // example [1, 4]
    let c = parseInt(coords[0]); // 1
    let r = parseInt(coords[1]); // 4
    // Used for retrieving question in the answerQuestion function
    //------------------------------------------
    const mainDiv = document.createElement('div'); // Creates the div for the selected question
    const answerForm = document.createElement('form'); // Creates subdiv for answer form
    const text = document.createElement('p');
    mainDiv.classList = 'question'; // Used for CSS
    mainDiv.setAttribute('answer', `${categories[c].clues[r].answer}`); // Used for retrieving answer in the answerQuestion function
    text.innerText = `${categories[c].clues[r].question}`; // Renders the question onto the div
    mainDiv.setAttribute('id', `${c}-${r}`); // Used for DOM selection in the answerQuestion function
    mainDiv.setAttribute('value', clickedClue.innerText); // Used for setting score in the answer then the next line executes
    clickedClue.innerText = `${categories[c].clues[r].question}`; // Renders the question to the clicked cell
    clickedClue.classList.remove('clue'); // Changes font size
    const answerInput = document.createElement('input'); // Creates a text input for the answer
    answerInput.setAttribute('type', 'text');
    const button = document.createElement('input'); // Submit button for the answer
    button.setAttribute('type', 'submit');
    button.addEventListener('click', answerQuestion);
    answerForm.append(answerInput);
    answerForm.append(button);
    mainDiv.append(text);
    mainDiv.append(answerForm);
    document.body.append(mainDiv);
    removeEventListener('click', handleClick); 
};

function answerQuestion(event) {
    event.preventDefault();
    const questionDiv = document.body.querySelector('.question');
    const answerForm = document.body.querySelector('form');
    const text = document.body.querySelector('p');
    /* Reads the answers and converts them to an array. There are multiple formats for the answers to account for user flexibility. */
    const answer = questionDiv.getAttribute('answer').split(',');
    const answerInput = document.body.querySelector('input[type=text]');
    const value = questionDiv.getAttribute('value').slice(1); // Removes the $ in order to calculate the score
    questionDiv.append(text);
    for (let a = 0; a < answer.length; a++){ // Iterates over the array of possible answers
            // If answer is correct
        if (answerInput.value.toLowerCase() === answer[a].toLowerCase()) {
            answerForm.remove();
            questionDiv.style.backgroundColor = '#00bd1c';
            questionDiv.style.fontSize = '60px';
            text.innerText = 'CORRECT';
            let score = parseFloat(scoreBoard.innerText.replace(',', '')) + parseFloat(value); // Removes comma separator, parses strings to numbers, then adds them together
            scoreBoard.innerText = score.toLocaleString(); // Converts new score to a string
            // "CORRECT" message will display for 2 seconds, then disappear, then player can continue
            setTimeout(function () {
                let coords = questionDiv.id.split('-'); // example [1, 4]
                let c = parseInt(coords[0]); // 1 - "c" stands for column
                let r = parseInt(coords[1]); // 4 - "r" stands for row
                document.getElementById(`${c}-${r}`).innerText = '';
                document.getElementById(`${c}-${r}`).removeEventListener('click', handleClick);
                questionDiv.remove(); // Removes the answer div
                openClue = false;
            }, 2000);
            return; /* Once it's true, the code stops running.
            Otherwise false will be generated and the "else" statement will execute.*/
        }
        // If answer is wrong
        else {
            answerForm.remove();
            questionDiv.style.backgroundColor = '#b90b0b';
            questionDiv.style.fontSize = '60px';
            text.innerText = 'INCORRECT';
            // "INCORRECT" message will display for 2 seconds, then disappear, then player can continue
            setTimeout(function () {
                // This code will restore the original table cell display
                let coords = questionDiv.id.split('-'); // example [1, 4]
                let c = parseInt(coords[0]); // 1 - "c" stands for column
                let r = parseInt(coords[1]); // 4 - "r" stands for row
                document.getElementById(`${c}-${r}`).innerText = questionDiv.getAttribute('value'); // Restores the score amount
                document.getElementById(`${c}-${r}`).classList = 'cell clue'; // For CSS purposes
                document.getElementById(`${c}-${r}`).addEventListener('click', handleClick); // Re-adds the event listener
                questionDiv.remove(); // Removes the answer div;
                openClue = false;
            }, 2000);
        };
    };
    // Code must be outside of "FOR" loop otherwise the inner logic will subtract points
    let score = parseFloat(scoreBoard.innerText.replace(',', '')) - parseFloat(value); // Removes comma separator, parses strings to numbers, then subtracts
    scoreBoard.innerText = score.toLocaleString();  // Converts new score to a string with comma separator
};
