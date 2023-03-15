console.log("Welcome to Tic Tac Toe");

let music = new Audio('./assets/music.mp3');
// music.play();
let turnmusic = new Audio('./assets/ting.mp3');
let gameover = new Audio('./assets/gameover.mp3');

let turn = "X";

// change turn
const changeTurn = () =>{
    // return turn === "X"?"0":"X";
    if(turn==="X"){
        turn = "0";
    }else{
        turn = "X";
    }
}

let isgameover = false;

// check for a win
const checkWin = ()=>{
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let boxtext = document.getElementsByClassName('boxtext');
    wins.forEach(e => {
         if((boxtext[e[0]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            // console.log(boxtext[e[0]].innerText + "Won");
            isgameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "13rem";
            gameover.play();
            setTimeout(function(){
                document.getElementById("reset").click();
            },2000);
         }
    });
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) =>{
    // console.log(element.innerText);
    let boxtext = element.querySelector('.boxtext');
    // console.log(boxtext.innerText);
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            changeTurn();
            turnmusic.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    });
});

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((element)=>{
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0";
    // gameover.play();
});
