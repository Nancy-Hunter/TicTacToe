let counter = 0 //moved counter outside objects so we have a constant tally of whos turn it is
class ticTacToe {
    constructor(targetBox,turn){
        
        this.turn = turn
        
        this.targetBox = targetBox
        document.querySelector(this.targetBox).addEventListener('click', this.checkOrUnchecked)//added the on click event listener
    }
    
    
    placeMarker () {
        //adds O to board only if counter is even
        
        if (counter % 2 == 0) {
            document.querySelector(targetBox).innerHTML = "O"
            counter++
        } else {  //adds X to board only if counter is odd
            document.querySelector(targetedBox).innerHTML = "X"
            counter++
        }        
    }
    checkAdjacent () { //determines if marker has adjacent marker
        this.checkForWin()
    }
    checkForWin () {     // determiines if third marker makes a line
        
    }
    nextOrWinner (move) { //detemines if next move or winner
        if (move) {
            console.log ("you win")
        } else {
            console.log (`it's ${v}'s turn`)
        }
        
    }
    checkOrUnchecked () { //determines if box if already marked or not
        console.log('whhop')
        if (document.querySelector(this.targetBox).textContent != ""){
            this.placeMarker()
            this.checkAdjacent()
            this.nextOrWinner()
        }
        else {
            console.log("Invalid Move")
        }
    }
} 

let playerO = new ticTacToe("#row1-column1", 'O')