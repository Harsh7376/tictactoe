let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGamebtn = document.querySelector("#new-btn")

let turn0 = true;

const winPatterns = [
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [0,1,2],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("box was clicked");
        if(turn0){
            box.innerHTML = "X";
            turn0 = false;
        }else{
            box.innerHTML = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

let showWinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    // msgContainer.style.display = "block";  //this is the first way to display the winner
    msgContainer.classList.remove("hide"); //there is a another way to display the winner

}

const checkWinner = ()=> {
    for(pattern of winPatterns){
        console.log(pattern[0]);
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        if(pos2val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log(pos1val + " has won!");
                showWinner(pos1val);
            }
        }
}
};