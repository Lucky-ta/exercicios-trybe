window.onload = function () {
let backgroundColor = document.getElementById('backgroundColor');
let colorBtn = document.getElementById('color-btn');
let textBtn = document.getElementById('text-btn');
let text = document.getElementById('text-color')
let colorInput = document.getElementById('text-input')

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
}

