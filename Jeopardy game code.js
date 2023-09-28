const start = document.querySelector('button');
const gameBoard = document.getElementById('gameboard');
const scoreBoard = document.getElementById('score'); // Scoreboard DOM selector
scoreBoard.innerText = 0; // Will be updated later as you get questions right

/* This function shuffles both the categories and the clues in order to generate random distribution.
This is based on an algorithm called Fisher Yates.*/
function shuffleCategories(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter); // Generates a random index
        counter--; // Decrease counter by 1
        let temp = array[counter]; // And swap the last element with it
        array[counter] = array[index];//--> index NOW equals whatever the random number is
        array[index] = temp; //and now that new index number for U.S. history NOW equals 'temp'
    };
    // Shuffles the clues in the categories, same code as above
    for (let i = 0; i < array[i].clues.length; i++){
        let counter = array[i].clues.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = array[i].clues[counter];
            array[i].clues[counter] = array[i].clues[index];
            array[i].clues[index] = temp; 
        };
    };
    return array.slice(0, 6); // Returns only 6 categories
};

// Start game button
start.addEventListener('click', startGame);

function startGame() {
    shuffleCategories(categories);
    const categoryRow = document.createElement('tr');
    // Sets the categories
    for (let a = 0; a < categories.length; a++){
        const categoryCells = document.createElement('th');
        categoryCells.classList = 'cell category'
        categoryCells.innerText = `${categories[a].category}`;
        categoryRow.append(categoryCells);
        $('thead').append(categoryRow);
    };
    // Set the questions and answers
    for (let a = 0; a < 5; a++){
        const row = document.createElement('tr');
        $('tbody').append(row);
        for (let b = 0; b < 6; b++){
            const cell = document.createElement('td');
            const money = a + 1; 
            cell.innerText = `${money * 100}`; // Sets the dollar amount for the cells
            cell.classList = 'cell clue'; // For CSS purposes
            row.append(cell);
            cell.setAttribute('id', `${b}-${a}`);
            cell.setAttribute('question', `${categories[b].clues[a].question}`); // Sets the question in the HTML
            cell.setAttribute('answer', `${categories[b].clues[a].answer}`); // Sets the answer in the HTML
            cell.addEventListener('click', handleClick);
        };        
    };
    start.removeEventListener('click', startGame);
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
    const question = document.createElement('div'); // Creates the div for the selected question
    question.classList = 'question' // Used for DOM selection
    question.setAttribute('answer', `${categories[c].clues[r].answer}`); // Used for retrieving answer in the answerQuestion function
    question.innerText = 'Answer: '; // Renders the question onto the div
    question.setAttribute('id', `${c}-${r}`); // Used for DOM selection in the answerQuestion function
    question.setAttribute('value', clickedClue.innerText); // Used for setting score in the answer then the next line executes
    clickedClue.innerText = `${categories[c].clues[r].question}`; // Renders the question to the clicked cell
    clickedClue.classList.remove('clue'); // Changes font size
    const answerForm = document.createElement('input'); // Creates a text input for the answer
    answerForm.setAttribute('type', 'text');
    const button = document.createElement('input'); // Submit button for the answer
    button.setAttribute('type', 'submit');
    button.addEventListener('click', answerQuestion);
    question.append(answerForm);
    question.append(button);
    document.body.append(question);
    
    removeEventListener('click', handleClick);  
};

function answerQuestion() {
    const questionForm = document.body.querySelector('div');
    const answerForm = document.body.querySelector('input[type=text]');
    const answer = questionForm.getAttribute('answer');
    const value = questionForm.getAttribute('value');
    // If answer is correct
    if (answerForm.value.toLowerCase() === answer.toLowerCase()) {
        document.body.querySelector('input[type=submit]').remove();
        answerForm.remove()
        questionForm.innerText = 'CORRECT';
        scoreBoard.innerText = parseFloat(scoreBoard.innerText) + parseFloat(value);
        // "CORRECT" message will display for 2 seconds, then disappear, then player can continue
        setTimeout(function () {
            let coords = questionForm.id.split('-'); // example [1, 4]
            let c = parseInt(coords[0]); // 1
            let r = parseInt(coords[1]); // 4
            document.getElementById(`${c}-${r}`).innerText = '';
            document.getElementById(`${c}-${r}`).removeEventListener('click', handleClick);
            questionForm.remove(); // Removes the answer div
            openClue = false;
        }, 2000);
    }
    // If answer is wrong
    else {
        document.body.querySelector('input[type=submit]').remove();
        answerForm.remove()
        questionForm.innerText = 'INCORRECT';
        // "INCORRECT" message will display for 2 seconds, then disappear, then player can continue
        setTimeout(function () {
            // This code will restore the original table cell display
            let coords = questionForm.id.split('-'); // example [1, 4]
            let c = parseInt(coords[0]); // 1
            let r = parseInt(coords[1]); // 4
            document.getElementById(`${c}-${r}`).innerText = questionForm.getAttribute('value'); // Restores the score amount
            document.getElementById(`${c}-${r}`).classList = 'cell clue'; // For CSS purposes
            document.getElementById(`${c}-${r}`).addEventListener('click', handleClick); // Re-adds the event listener
            questionForm.remove(); // Removes the answer div;
            openClue = false;
        }, 2000);
    };
};