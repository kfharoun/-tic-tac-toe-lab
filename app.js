/**                     GOALS
        1. tic tac toe is empty when og display
        2. player can click on 9 cells to make a move 
        3. one click alternates X and O
        4. display whos turn it is
        5. cannot click an occupied cell
        6. display a win message
        7. display a tie message 
        8. reset game button **/
/*-------------------------------- Constants --------------------------------*/
// var named board = squares on the board x
// var named turn = whose turn it is
// var named winner = has anyone won 
// var named tie = is there a tie 


const squareEls = document.querySelectorAll(`.sqr`)
const messageEl = document.querySelector(`#message`)
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [0, 4 ,8]
]





/*---------------------------- Variables (state) ----------------------------*/
// got help from megan and will
let board 
let turn 
let winner 
let tie 
/* A true value in tie will mean that the board array contains no more empty strings ('') and will be used to render a tie message if winner is still false by the time all squares are played. */
/*------------------------ Cached Element References ------------------------*/
let resetBtnEl = document.querySelector(`#reset`)


/*-------------------------------- Functions --------------------------------*/
// board var to an array containing nine empty strings (``) that represent empty squres
function init (){
    // console.log(`game loading...`)
    turn = `🍯`
    winner = false
    tie = false
    board = [
    ``, ``, ``,
    ``, ``, ``,
    ``, ``, ``
] 
// console.log(board)
// console.log (turn)
// console.log(winner)
// console.log(tie)
squareEls.forEach(square => {
    square.addEventListener('click', handleClick) 
})
resetBtnEl.addEventListener(`click`, restart)
render()

}
function render(){
    updateBoard()
    updateMessage()
}

function updateBoard (){
   squareEls.forEach((square) => {
    const squareIndex = parseInt(square.getAttribute('id'))
    square.innerText = board[squareIndex]
        if (board[squareIndex] === `🍯`){
            square.style.color = `pink`
        } else if (board[squareIndex] === `🧸`){
            square.style.color = `blue`
    }

})} 

function updateMessage (){
 if (!winner && !tie){
    messageEl.innerText = `${turn}'s turn`}
    else if (!winner && tie === true){
        messageEl.innerText = `It's a tie!`
} else {
    messageEl.innerText = `Yay! ${turn} won!`
}}

function handleClick () {
    // console.log(`clicked!`)
    const squareIndex = parseInt(this.getAttribute('id'))
    if (board[squareIndex] === `` && !winner) {
        placePiece(squareIndex)
        checkForWinner()
        checkForTie()
        if (!winner){
            switchPlayerTurn()
        }
    }
        render()
}

 function placePiece (index) {
    board[index] = turn
 }

 function checkForWinner() {
    for (const wins of winningCombos) {
        const [a, b, c] = wins;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            winner = true
            break
        }
    }
}

function checkForTie(){
    if (winner)
    return 
    tie = !board.some(square => square === ``)
}

function switchPlayerTurn (){
    // if (winner)
    // return
    // if (!winner){
        turn = turn === `🍯` ? `🧸` : `🍯`
        // }
    }
function restart (){
    window.location.reload()
}
/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener(`DOMContentLoaded`, function(){
    init()
})
// worked with will alfred megan azalea and grace
//credit: basedash

// squareEls.forEach(function(square) {
//         square.addEventListener('click', handleClick)
//         square.innerText= turn
//         let squareIndex = parseInt(square.getAttribute('id'))
//         board[squareIndex] = turn
//         console.log(board)
// })

// sources used
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
// https://stackoverflow.com/questions/66160535/how-to-switch-turns-in-a-game-of-tic-tac-toe
// https://legacy.reactjs.org/docs/handling-events.html
// https://sentry.io/answers/how-do-i-refresh-a-page-using-javascript/
// MDN array function
// used chatgpt to point me in the right direction when formating was wrong
    // specifically used it to get the handleClick function to work
