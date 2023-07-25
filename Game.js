console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change the Turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a Win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(element =>{
        if((boxtexts[element[0]].innerText === boxtexts[element[1]].innerText) && (boxtexts[element[2]].innerText === boxtexts[element[1]].innerText) && (boxtexts[element[0]].innerText !== "")){
            document.querySelector(".info").innerHTML = boxtexts[element[0]].innerText + " " + "Won"
            isgameover =true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${element[3]}vw, ${element[4]}vw) rotate(${element[5]}deg)`
        } 
    })
}

// Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(isgameover){
            this.removeEventListener('click', arguments.callee);
        }
        else if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listner to reset button
reset.addEventListener("click", () =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText ="Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";
})




