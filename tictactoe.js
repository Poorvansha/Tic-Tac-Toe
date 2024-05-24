let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newGamebtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

//alternate turns
let turnO=true;//value true to O ki turn otherwise x ki turn
 
//to store winning patterns we store array
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    //and we need all buttons get enabled
    enableBoxes();
    msgContainer.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
      if(turnO===true){ //player O ki turn
        box.innerText="O";
        turnO=false;
      }else{
        box.innerText="X";
        turnO=true;
      }
      //once a value is placed in a box we have to disable the box for that we use diable 
      box.disabled=true;
      checkWinner(); // to check if a ya x ki line banri hai ya nahi
    });
});

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
   msg.innerText=`Congratulations, Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
};

// to check winner
const checkWinner=()=>{
    for(let pattern of winPatterns){
       // console.log(pattern[0],pattern[1],pattern[2]);
       // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                
                showWinner(pos1val);
                
            }
        }
    }
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
