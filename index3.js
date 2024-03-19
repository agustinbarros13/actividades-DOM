//A
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const list = document.createElement('ul')
list.id = 'countryList'
countries.forEach((country) => {
  const listItem = document.createElement('li')
  listItem.textContent = country
  list.appendChild(listItem)
})

console.log(list)
document.body.appendChild(list)
//B
const elementosABorrar = document.querySelectorAll('.fn-remove-me')
elementosABorrar.forEach((elemento) => {
  console.log('Elemento elimindo:', elemento.textContent)
  elemento.remove()
})
//C
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const printHereDiv = document.querySelector('[data-function="printHere"]')
const list2 = document.createElement('ul')
cars.forEach((car) => {
  const listCar = document.createElement('li')
  listCar.textContent = car
  list2.appendChild(listCar)
})
printHereDiv.appendChild(list2)
console.log(printHereDiv)
//D
const countries1 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
const createNewContainer = document.createElement('div')
createNewContainer.id = 'container'
document.body.appendChild(createNewContainer)
const container = document.querySelector('#container')

countries1.forEach((country1) => {
  const div = document.createElement('div')

  const h4 = document.createElement('h4')
  h4.textContent = country1.title

  const img = document.createElement('img')
  img.src = country1.imgUrl
  img.alt = country1.title

  div.appendChild(h4)
  div.appendChild(img)

  container.appendChild(div)
})
//F
const button = document.createElement('button')
button.textContent = 'Eliminar último elemento.'
button.addEventListener('click', () => {
  // Obtener todos los divs dentro del contenedor
  const divs = document.querySelectorAll('#container > div')
  // Verificar si hay s divs disponibles para eliminar
  if (divs.length > 0) {
    // Eliminar el último div
    const lastDiv = divs[divs.length - 1]
    lastDiv.remove()
  } else {
    console.log('No hay elementos para eliminar.')
  }
})

// Agregar el botón al documento
document.body.appendChild(button)
//G
const divs = document.querySelectorAll('#container > div')
divs.forEach((div, index) => {
  // Crear un botón para cada div, y con el index accede a cada una de las posiciones del array
  const buttonElements = document.createElement('button')
  buttonElements.textContent = 'Eliminar este elemento.'

  // Agregar un evento de clic al botón para eliminar el div correspondiente
  buttonElements.addEventListener('click', () => {
    console.log('Elemento eliminado:', div)
    div.remove()
  })

  // Agregar el botón al div
  div.appendChild(buttonElements)
})
