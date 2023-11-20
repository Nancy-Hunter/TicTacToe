class ticTacToe {
    constructor(){
        this.counter = 0 //if counter is 9 and no winner --cat's game
        this.currentPlayer = "X" 
        this.targetedBox = '' //logs which box is clicked
        this.arrayOptionsTracker = ['','','','','','','','',''] //tracks all x and o marks
        this.xArray = [] //tracks all x's
        this.oArray = [] //tracks all o's
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
        
    }
    set targetBox (eventListenerSquare) {
        this.targetedBox = eventListenerSquare
    }
    determineTarget () { //sets targetedBox
        this.targetBox=Number(event.target.getAttribute('id')) //converts box clicked id attribute to a number
        console.log(this.targetedBox); 
        this.squareClicked()
    }
    squareClicked () { //determines if box if already marked or not
        if (this.arrayOptionsTracker[this.targetedBox]==''){ //makes sure box isn't already filled
            this.arrayOptionsTracker[this.targetedBox]=this.currentPlayer //updates arrayOptionsTracker
            console.log(this.arrayOptionsTracker)
            this.placeMarker()
            this.checkForWinner()
        }
        else {
            console.log("Invalid Move") 
        }
    }
    placeMarker () {
        this.counter++ //adds to turn counter    
        if (this.currentPlayer=="X") {
            document.getElementById(this.targetedBox).innerHTML = "X" //adds X to board 
            this.xArray.push(this.targetedBox) //updates xArray
            this.currentPlayer = "O"  //makes it O's turn
        } else {  
            document.getElementById(this.targetedBox).innerHTML = "O" //adds O to board 
            this.oArray.push(this.targetedBox) //updates oArray
            this.currentPlayer = "X"  //makes it X's turn
        }        
    }
    checkForWinner () { //detemines if next move or winner 
        let winnerArray 
        for (let i = 0; i<this.winConditions.length; i++) { //loops through winConditions and determines if oArray or xArray match
            if (this.winConditions[i].every(current=>this.xArray.includes(current)) || this.winConditions[i].every(current=>this.oArray.includes(current))){
                winnerArray=true //winner found!
            }
        }
        if (winnerArray) { //winner!
            this.winner() 
        } else { //next turn
            document.querySelector('h3').innerHTML=`It's ${this.currentPlayer}'s turn`
            if(this.counter == 9){
                document.querySelector('h3').innerHTML = `It's a cat's game afterall. press 'reset' to play again`
                document.querySelector('img').src = 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'
            }
        }
    }
    winner () { //reverts player to last player to declare a winner
        if (this.currentPlayer=="X") {
            this.currentPlayer = "O"
        } else {
            this.currentPlayer = "X"
        }
        document.querySelector('h3').innerHTML= `${this.currentPlayer} wins!`
    }

    restartGame() {
        // Reset all game variables to their initial state
        this.counter = 0;
        this.currentPlayer = "X";
        this.targetedBox = '';
        this.arrayOptionsTracker = ['','','','','','','','',''];
        this.xArray = [];
        this.oArray = [];

        // Clear the board
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => square.innerHTML = '');

        // Update the message
        document.querySelector('h3').innerHTML = `It's ${this.currentPlayer}'s turn`;

        // Clear cat img
        document.querySelector('img').src = ''
    }

}


let ticTacToeGame = new ticTacToe


document.querySelector('.squares').addEventListener('click', function () {
    ticTacToeGame.determineTarget ()
})

document.getElementById('restartButton').addEventListener('click', function () {
    ticTacToeGame.restartGame();
});