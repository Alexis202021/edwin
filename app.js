//document object model
const btnChangeColor = document.querySelector('#btnColor');
let btnCV = document.querySelector('#btncv');
let inputColor=document.querySelector('#inputColor')
let headerCard=document.querySelector('#header_card')
btnChangeColor.addEventListener("click", cambiarColor);
console.log(inputColor.value)
function cambiarColor(){
    let valorColor=inputColor.value
    headerCard.style.backgroundColor=valorColor
    btnCV.style.backgroundColor=valorColor
}