class ticTacToe {
    constructor(targetedBox){
        this.counter = 0 //if counter is 9 and no winner --cat's game
        this.currentPlayer = "X"
        this.targetedBox = targetedBox
    }
    checkOrUnchecked () { //determines if box if already marked or not
        if (document.querySelector(targetedBox).textContent != ""){
            this.placeMarker()
            this.checkAdjacent()
            this.nextOrWinner()
        }
        else {
            console.log("Invalid Move")
        }
    }
    placeMarker () {
        counter++ //adds to turn counter    
        if (this.currentPlayer=="X") {
            document.querySelector(targetedBox).innerHTML = "X" //adds X to board 
            this.currentPlayer = "O"  //makes it O's turn
        } else {  
            document.querySelector(targetedBox).innerHTML = "O" //adds O to board 
            this.currentPlayer = "X"  //makes it X's turn
        }        
    }
    checkAdjacent () { //determines if marker has adjacent marker
        this.checkForWin()
    }
    checkForWin () {     // determiines if third marker makes a line
        
    }
    nextOrWinner (move) { //detemines if next move or winner
        if (move) {
            console.log (`${this.currentPlayer} wins!`)
        } else {
            console.log (`It's ${this.currentPlayer}'s turn`)
        }
        
    }
}