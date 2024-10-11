let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgame_btn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn_O = true;  //playerO playerX
const Win_patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log ("box has been clicked")
        if(turn_O){
            box.innerText= "O";
            turn_O = false;
        }else{
            box.innerText = "X";
            turn_O= true;
        }
        box.disabled = true;
        CheckWinner();
    });
    
 });

 const ResetGame =  ()  => {
    turn_O = true;
    enableBoxes();
    msgcontainer.classList.add("hide")
 }

 const enableBoxes= () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }
 const disableBoxes= () => {
    for (box of boxes){
        box.disabled = true;
    }
 }
 const ShowWinner =(winner) => {
    msg.innerText = `Congo! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
 }
 const CheckWinner = () =>{
    for( let pattern of  Win_patterns ){
        let val_pos1 =boxes[pattern[0]].innerText;
        let val_pos2 =boxes[pattern[1]].innerText;
        let val_pos3 =boxes[pattern[2]].innerText;
        if(val_pos1 !="" && val_pos2 != "" && val_pos3 != ""){
            if(val_pos1 === val_pos2 && val_pos2 === val_pos3){
                console.log("you are winner", val_pos1);
                ShowWinner(val_pos1);
                return true;
            }
        }
    }
 }
 reset.addEventListener("click", ResetGame  );
 newgame_btn.addEventListener("click", ResetGame  );



































































      
    
