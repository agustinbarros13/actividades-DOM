//A
const newDiv = document.createElement('div')
document.body.appendChild(newDiv)
console.log(newDiv)
//B
const newDiv2 = newDiv.cloneNode(true) //clonar otro div para insertar el párrafo.
document.body.appendChild(newDiv2)
console.log(newDiv2)
const newP = document.createElement('p')
newP.textContent = 'contenído del nuevo párrafo'
newDiv2.appendChild(newP)
//C
const newDiv3 = newDiv.cloneNode(true)
document.body.appendChild(newDiv3)
for (let i = 0; i < 6; i++) {
  const newP2 = document.createElement('p')
  newP2.textContent = `Se ha creado el párrafo: ${i + 1}`
  newDiv3.appendChild(newP2)
}
//D
const newP3 = document.createElement('p')
newP.textContent = 'Soy dinámico!'
console.log(newP3)
//E
const H2 = document.querySelector('.fn-insert-here')
H2.textContent = 'Wubba Lubba dub dub'
//F
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const list = document.createElement('ul')
document.body.appendChild(list)
for (i = 0; i < apps.length; i++) {
  const liElement = document.createElement('li')
  liElement.textContent = apps[i]
  list.appendChild(liElement)
}
//G
const remove = document.querySelector('.fn-remove-me')
remove.remove()
console.log(remove)
//H
const divs = document.querySelectorAll('div.fn-insert-here')
const pElement = document.createElement('p')
pElement.textContent = 'Voy en medio!'
divs[1].parentNode.insertBefore(pElement, divs[1])
console.log(pElement)
//I
const insertText = document.querySelectorAll('div.fn-insert-here')
insertText.forEach((div) => {
  const newP4 = document.createElement('p')
  newP4.textContent = 'Voy dentro!'
  div.appendChild(newP4)
})
console.log(insertText)
