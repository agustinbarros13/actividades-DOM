const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
const div = document.createElement('div')
document.body.appendChild(div)
const ul = document.createElement('ul')
div.appendChild(ul)
albums.forEach((album) => {
  const li = document.createElement('li')
  li.textContent = album
  ul.appendChild(li)
  console.log(li)
})
