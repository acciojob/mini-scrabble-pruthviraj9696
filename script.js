//your code here
let eva = document.getElementById("eva");
let letterCount = getElementById("letterCount");

eva.addEventListener("input",lettertext);

function lettertext(){
    let word = eva.value;
    let letter = word.length;
    letterCount.innerText = letter;
}