const squares = document.querySelectorAll('.squares')
const statusText = document.getElementById("statusText")
const restartBtn = document.getElementById("restartBtn")

//array that store the possible winning conditions
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//current player that we are going to update each time we play
let currentPlayer = 'X'
