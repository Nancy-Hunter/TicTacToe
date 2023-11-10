// Create a class named TicTacToe
class TicTacToe{
    // The constructor is a special function that gets called when we create a new TicTacToe object
    constructor(){
        
        // Select all elements with the class "squares" and assign them to the property "squares"
        this.squares = document.querySelectorAll('.square')
        
        // Select the element with the id "statusText" and assign it to the property "statusText"
        this.statusText = document.getElementById('statusText')
        
        // Select the element with the id "restartBtn" and assign it to the property "restartBtn"
        this.restartBtn = document.getElementById('restartBtn')
        
        // Define the winning conditions for the game
        this.winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        // An array to keep track of X's and O's on the game board
        this.arrayOptions ["","","","","","","","",""]

        // The current player (X or O)
        this.currentPlayer = 'X'
        
        // A flag to check if the game is still running
        this.running = false

        // Call the method initializeGame when a new object is created
        this.initializeGame()
    }

     // A method to set up the initial state of the game
    initializeGame(){
        // Add a click event listener to each square, calling the squareClicked method when clicked
        this.squares.forEach( square => square.addEventListener('click', ()=> this.squareClicked()))
        // Add a click event listener to the restart button, calling the restartGame method when clicked
        this.restartBtn.addEventListener('click', ()=> this.restartGame())
        // Set the initial text content of the statusText element
        this.statusText.textContent = `${currentPlayer}'s turn`
        // Set the running flag to true
        this.running = true


    }
    // A method to handle a cell being clicked
    squareClicked(){
        // Get the cell index from the clicked cell's attribute
        // Check if the clicked cell is already occupied or if the game is not running
        // return the exit the method early if the conditions are met
        // Call the updateSquare method with the clicked cell and its index
        // Check if there is a winner after the cell is updated
    }

    // A method to update a square with the current player's symbol
    updateSquare(){
        // Update the options array with the current player's symbol at the given index
        // Set the text content of the clicked cell to the current player's symbol
        // Call the changePlayer method to switch to the other player
    }

    // A method to switch to the other player (X to O or vice versa)
    changePlayer(){
        // If the current player is X, change it to O; otherwise, change it to X
        // Update the statusText to indicate the turn of the current player

    }

    // A method to check if there is a winner or if the game is a draw
    checkWinner(){
        let roundWon = false
        // A flag to determine if a round is won
        // Iterate through the winning conditions
        // we will destructure the current condition array into three variables
        // Check if any of the squares in the current condition are empty
        // Move on to the next condition if any cell is empty

        // Check if all three squares have the same symbol (X or O)
        // Set the roundWon flag to true if there is a winne
        // Exit the loop early since we already found a winner

        // Check the value of the roundWon flag after the loop
        // If a round is won, update the statusText and set the running flag to false
         // If there is no winner and no empty squares, it's a draw
         // If the game is still ongoing, switch to the other player
    }

    restartGame(){

    }
}

let ticTacToeGame = new TicTacToe()