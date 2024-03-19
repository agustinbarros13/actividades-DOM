//A
const div = document.createElement('div')
const bottonE = document.createElement('botton')
bottonE.id = ' btnToClick'
bottonE.textContent = 'Click'
bottonE.addEventListener('click', (evento) => {
  console.log('información del evento click:', evento)
})
div.appendChild(bottonE)
document.body.appendChild(div)
console.log(bottonE)
//B

document.querySelector('.focus').addEventListener('focus', (eventoFocus) => {
  console.log('información del Input:', eventoFocus.target.value)
})
//C
document.querySelector('.value').addEventListener('input', (eventoInput) => {
  console.log('el valor del input es: ', eventoInput.target.value)
})
