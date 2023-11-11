class ticTacToe {
    constructor(){
        this.counter = 0 //if counter is 9 and no winner --cat's game
        this.currentPlayer = "X"
        this.targetedBox = ''
        this.arrayOptionsTracker = ['','','','','','','','','']
        this.xArray = []
        this.oArray = []
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
    determineTarget (e) {
        this.targetBox=Number(e.target.getAttribute('id'))
        console.log(this.targetedBox);
        this.squareClicked()
    }
    squareClicked () { //determines if box if already marked or not
        if (this.arrayOptionsTracker[this.targetedBox]==''){
            this.arrayOptionsTracker[this.targetedBox]=this.currentPlayer
            // this.checkAdjacent()
            // this.nextOrWinner()
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
            this.xArray.push(this.targetedBox)
            this.xArray= this.xArray.sort((a, b)=> a - b)
            this.currentPlayer = "O"  //makes it O's turn
        } else {  
            document.getElementById(this.targetedBox).innerHTML = "O" //adds O to board 
            this.oArray.push(this.targetedBox)
            this.oArray= this.oArray.sort((a, b)=> a - b)
            this.currentPlayer = "X"  //makes it X's turn
        }        
    }
    checkForWinner () { //detemines if next move or winner DOESNT WORK
        let winnerArray = []
        winnerArray = this.winConditions.forEach(x=> x.every(current=>this.xArray.includes(current)))
        console.log(winnerArray)
        if (winnerArray.includes('true')) {
            console.log (`${this.currentPlayer} wins!`)
        } else {
            console.log (`It's ${this.currentPlayer}'s turn`)
            console.log(this.xArray)
            console.log(this.oArray)
            console.log([0,4,8].every(current=>this.xArray.includes(current)))
        }
        
    }
}

let ticTacToeGame = new ticTacToe

document.querySelector('.squares').addEventListener('click', function (e) {
    ticTacToeGame.determineTarget (e)
})