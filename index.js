const clasShowme = document.querySelector('.showme')
console.log(clasShowme)
const h1Element = document.querySelector('#pillado')
console.log(h1Element)
const p = document.querySelectorAll('p')
console.log(p) //imprimirá por consola una lista de nódos.
const allPokemon = document.querySelectorAll('.pokemon')
console.log(allPokemon) //imprimirá por consola una lista de nódos.
const elements = document.querySelectorAll('[data-function="testMe"]')
elements.forEach((element) => console.log(element)) //iteramos en cada uno de los elementos e imprimimos e a uno por consola.
const element3 = document.querySelector(
  '[data-function="testMe"]:nth-of-type(3)'
)
console.log(element3)
