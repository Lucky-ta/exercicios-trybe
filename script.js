window.onload = function () {
const backgroundColor = document.getElementById('backgroundColor');
const colorBtn = document.getElementById('color-btn');
const textBtn = document.getElementById('text-btn');
const text = document.getElementById('text-color')
const colorInput = document.getElementById('text-input')
const fontSizeBtn = document.getElementById('font-size');


colorBtn.addEventListener('click',function() {
    let cor = document.body.style.backgroundColor = backgroundColor.value
    localStorage.setItem('colorido',cor)
})

let corsalva = localStorage.getItem('colorido');
document.body.style.backgroundColor = corsalva;

textBtn.addEventListener('click', function() {
    let colortext =text.style.color = colorInput.value
    localStorage.setItem('cortexto', colortext)
})
let textoSalvo = localStorage.getItem('cortexto')
text.style.color = textoSalvo

fontSizeBtn.addEventListener('change', function () {
   let textFont = this.value
   text.style.fontFamily = textFont
})
}
