let boxes=document.querySelectorAll('.box');

let resetBtn=document.querySelector('#reset-btn');

let turnX=true; // two players X and O

// winning patterns
// (0,1,2),(3,4,5),(6,7,8),(0,3,6),(1,4,7),(2,5,8),(0,4,8),(2,4,6) total:8

const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];

var btnClickCount=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
if(turnX){ //player X turn
    box.innerText="X";
    turnX=false;
}
else{ //player O turn
    box.innerText="O";
    turnX=true;
}
box.disabled=true;
// check for winner during any button click

checkWinner();
btnClickCount++;
if(btnClickCount===9){
    drawCondition();
}
    });
});

//reset the game
resetBtn.addEventListener("click",()=>{
boxes.forEach((box)=>{
    box.innerText="";
    //remove winner when reset
    if(document.querySelector('#winner')){
        document.querySelector('#winner').remove();
    }
    //remove draw when reset
    if(document.querySelector('#draw')){
        document.querySelector('#draw').remove();
    }
    box.disabled=false;
    turnX=true;
    btnClickCount=0;
});
});

const checkWinner=()=>{
winPatterns.forEach((pattern)=>{
let pos1Val=boxes[pattern[0]].innerText;
let pos2Val=boxes[pattern[1]].innerText;
let pos3Val=boxes[pattern[2]].innerText;
if(pos1Val!="" && pos2Val!="" && pos3Val!="" ){
    if(pos1Val===pos2Val && pos2Val===pos3Val)
    {
        var newElement=document.createElement('h1');
        newElement.id='winner'
        newElement.textContent = pos1Val+' is the winner';
        var parentElement = document.getElementById('main-parent');
        parentElement.appendChild(newElement);
    }

}
});

};

function drawCondition()
{
    var newElement=document.createElement('h1');
    newElement.id='draw'
    newElement.textContent = 'Draw';
    var parentElement = document.getElementById('main-parent');
    parentElement.appendChild(newElement);
}
