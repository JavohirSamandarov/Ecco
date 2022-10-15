const inputSearch = document.querySelector('#product-search')
const cards = document.querySelectorAll('.product-card')
const basketClose = document.querySelector('.basket-close')
const basket = document.querySelector('.basket')
const basketItem = document.querySelector('.nav-contact__items')

basketItem.addEventListener('click', () => {
    basket.style.transform = 'translateX(0%)'
})
basketClose.addEventListener('click', () => {
    basket.style.transform = 'translateX(100%)'
})

let btns = document.querySelectorAll('.btns')
const addCard = document.querySelector('.add-card')
const cardNum = document.querySelector('.item-number')
let cardPrice = document.querySelector('#item-price')
const productCard = document.querySelectorAll('.product-card')

const products = [
    {
        id: 1,
        image: './images/image1.png',
        title: 'Ultraboost 21 sneakers',
        price: 94.75,
        count: 1,
    },
    {
        id: 2,
        image: '/images/image2.png',
        title: 'ZX 8000 Lego sneakers',
        price: 28.56,
        count: 1,
    },
    {
        id: 3,
        image: '/images/image3.png',
        title: 'Nike Blazer Low 77 Vintage',
        price: 28.56,
        count: 1,
    },
    {
        id: 4,
        image: '/images/image4.png',
        title: 'ASMC Winter Boot Cold.Rdy',
        price: 35.4,
        count: 1,
    },
    {
        id: 5,
        image: '/images/image5.png',
        title: '2750 Cotu Classic Sneaker',
        price: 28.56,
        count: 1,
    },
    {
        id: 6,
        image: '/images/image6.png',
        title: 'Gazelle Vintage low-top sneaker',
        price: 28.56,
        count: 1,
    },
    {
        id: 7,
        image: '/images/image7.png',
        title: 'Madrid Big Buckle Sandal',
        price: 64,
        count: 1,
    },
    {
        id: 8,
        image: '/images/image8.png',
        title: 'Nike Air Force 1 NDESTRUKT',
        price: 32.2,
        count: 1,
    },
    {
        id: 9,
        image: '/images/image9.png',
        title: 'Chuck 70 Hi Sneaker',
        price: 37,
        count: 1,
    },
]

localStorage.setItem('carts', JSON.stringify(products))

// let s = JSON.parse(localStorage.getItem('carts'))

// console.log(s);

let arr = []

const productsCard = document.querySelector('.product-cards')

for (let i = 0; i < products.length; i++) {
    let product_card = document.createElement('div')
    product_card.setAttribute('class', 'product-card')

    product_card.innerHTML = `
        <div class="product-card__top">
            <img class="btns" src="${products[i].image}" alt="" />
        </div>
        <div class="product-card__bottom">
            <h1 class="product-title">${products[i].title}</h1>
            <div class="bottom-card">
                <div class="price">
                    <h1 class="price-item">$${products[i].price}</h1>
                </div>
                <button class="add-card" onclick="addCart(${products[i].id})">Add-card</button>
            </div>
        </div>
    `

    productsCard.append(product_card)

    function reduce(id) {
        let prodCount = document.querySelector(`#product_num${id}`)
        let product = products.find((e) => e.id == id)
        let disabledButton = document.querySelector(`#prodReduce${id}`)

        product.count = product.count - 1
        prodCount.textContent = product.count
        if (product.count <= 1) {
            disabledButton.setAttribute('disabled', '')
        }
    }

    function increase(id) {
        let prodCount = document.querySelector(`#product_num${id}`)
        let disabledButton = document.querySelector(`#prodReduce${id}`)
        let product = products.find((e) => e.id == id)
        product.count = product.count + 1
        prodCount.textContent = product.count
        if (product.count > 1) {
            disabledButton.removeAttribute('disabled')
        }
    }

    function remove(id) {
        let prod = basket.querySelector(`#prod${id}`)
        let product = products.find((e) => e.id == id)
        product.count = 1

        prod.remove()
    }

    function addCart(id) {
        let product = products.find((e) => e.id == id)

        // localStorage.setItem()

        // localStorage.setItem('carts', )

        let basketpro = document.createElement('div')
        basketpro.setAttribute('class', 'basket-item')
        basketpro.id = 'prod' + id
        let prod = basket.querySelector(`#prod${id}`)
        let prodCount = document.querySelector(`#product_num${id}`)

        if (prod) {
            product.count = product.count + 1
            prodCount.textContent = product.count
        } else {
            basketpro.innerHTML = `
                <div class="basket-name">
                    <div class="basket-item__image">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="basket-item__title">
                        <h1 class="product-name">${product.title}</h1>
                        <h1 class="basket-price">$${product.price}</h1>
                        <button class="del-product" id="prodReduce${id}" onclick="reduce(${product.id})">-</button>
                        <span class="product-num" id="product_num${id}">${product.count}</span>
                        <button class="add-product" id="prodIncrease${id}" onclick="increase(${product.id})">+</button>
                    </div>
                </div>
                <button class="remove-product" onclick="remove(${product.id})">remove</button>
                `

            basket.append(basketpro)
        }
    }
}

// //  Basket count
// let productNum = 0;

// productCard.forEach(el => {
//     el.addEventListener('click', ()=>{
//         let basketProduct = productNum += 1;
//         cardNum.textContent = basketProduct;

//     })
// })

// function addCart(id) {
//     // console.log(id);
//     const prod = products.find(p => p.id == id);
//     // console.log(prod);
//     // console.log(parseInt(cardPrice.innerHTML));
//     document.getElementById('item-price').innerHTML =( parseInt(cardPrice.innerHTML) + prod.price)
// }

// btns.forEach(button => {
//     button.addEventListener("click", () => {
//         let elem = document.querySelector('.card_img')

//             if(!elem){
//                 let creteElm = document.createElement('div')
//                 creteElm.classList.add("card_img")

//                 let createImg = document.createElement("img")
//                 createImg.src = button.src

//                 let close = document.createElement("div")
//                 close.classList.add('close')

//                 creteElm.append(close)

//                 creteElm.append(createImg)
//                 document.body.append(creteElm)

//                 close.addEventListener("click", () => {
//                     creteElm.remove(close)
//                 })
//             }

//     })
// })
