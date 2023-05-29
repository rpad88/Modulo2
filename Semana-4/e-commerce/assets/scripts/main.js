const productList = document.querySelector('#product-list-row')

const products = [
    {
        title: 'JBL',
        price: 99.90,
        priceUnity: 'R$'
    },
    {
        title: 'Sony',
        price: 149.90,
        priceUnity: 'R$'
    },
    
]

// function loadProducts(params) {
//     products.forEach(product => {
//         // Cria o elemento div class=col-3
//         const colDiv = document.createElement('div')
//         colDiv.className = 'col-sm-6 col-md-4 col-lg-3 mb-5'

//         const productDiv = document.createElement('div')
//         productDiv.className = 'product'

//         const imageDiv = document.createElement('div')
//         imageDiv.className = 'image-product'
//         productDiv.appendChild(imageDiv)

//         const titleSpan = document.createElement('span')
//         titleSpan.className = 'title-product'
//         titleSpan.textContent = `${product.title} `
//         productDiv.appendChild(titleSpan)

//         const priceSpan = document.createElement('span')
//         priceSpan.className = 'price-product'
//         priceSpan.textContent = `${product.priceUnity}  ${product.price}`
//         productDiv.appendChild(priceSpan)

//         const buyButton = document.createElement('button')
//         buyButton.className = 'buy-button'
//         buyButton.textContent = 'Adc ao carrinho'
//         productDiv.appendChild(buyButton)

//         colDiv.appendChild(productDiv)
//         productList.appendChild(colDiv)
//     })

// }

function loadProducts2() { //Usando o template do html

    products.forEach(product => {
        const template = document.querySelector('#template')
        const content = template.content.cloneNode(true)
    
        const title = content.querySelector('.title-product')
        title.textContent = `${product.title}`

        const price = content.querySelector('.price-product')
        price.textContent = `${product.priceUnity}  ${product.price}`

        productList.appendChild(content)
    })
}

function trocarTema() {
    const body = document.body
    const isDarkTheme = body.classList.contains('dark-theme')

    body.classList.toggle('dark-theme', !isDarkTheme)
}

// loadProducts()
loadProducts2()