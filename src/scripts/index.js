const HTMLResponse = document.querySelector('#app')
const API_URL = 'https://api.biteindustry.es/products'
const ul = document.createElement('ul')

fetch(API_URL,{headers: {'Authorization': '*CdY2)x4|]<uv9V)-{^W6[j#c'},})
  .then(r => r.json())
  .then((products) => {
    products.forEach((product) => {
      let elem = document.createElement('li')
      elem.appendChild(
        document.createTextNode(`ee ${product.name}`)
      )
      ul.appendChild(elem)
    })
    HTMLResponse.appendChild(ul)
  })
