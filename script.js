// //your code here
// let eva = document.getElementById("eva");
// let letterCount = getElementById("letterCount");

// eva.addEventListener("input",lettertext);

// function lettertext(){
//     let word = eva.value;
//     let letter = word.length;
//     letterCount.innerText = letter;
// }


function getData() {
    const name = document.getElementById('eva').value;
    document.getElementById('letterCount').innerHTML = name.length;
}