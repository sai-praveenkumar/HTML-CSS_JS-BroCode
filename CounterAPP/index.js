const decreaseBtn = document.getElementById("decreasebtn");
const resetBtn = document.getElementById("resetbtn");
const increaseBtn = document.getElementById("increasebtn");
const countLabel = document.getElementById("countlabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent= count;
}
resetBtn.onclick = function(){
    count =0;
    countLabel.textContent = count;
}