const cartItems = document.querySelector(".cart-items");
const itemNumber = document.querySelector(".item-number")
const items = document.querySelector(".items")
const itemsPriceSum = document.querySelector(".item-price-sum")
const Shipping = 10.50
const ShippingFee = document.querySelector(".Shipping-fee")
ShippingFee.textContent = `$${Shipping.toFixed(2)}`
const taxBefore = document.querySelector(".tax-before")
const estimatedTax = document.querySelector(".estimated-tax")
const orderTotal = document.querySelector(".order-total-price")







function storeCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.innerHTML))
}

function storecart() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function getCart() {
    cart = JSON.parse(localStorage.getItem('cart'))
}

function getCartItems() {
    cartItems.innerHTML = JSON.parse(localStorage.getItem('cartItems'))
}

getCart()
if (cart.length < 1) {
    cartItems.innerHTML = `<h2>No items in the cart</h2>`
}

getCartItems()



if (!cart) {
    cart = [{
        name: `Desktop Computer`,
        image: `../Lipstick.jpg`,
        price: `$250.92`,
        quantity: 10,
        deliveryDate: `Mon, Dec, 27`
    }, {
        name: `113 Pro Max`,
        image: `../113 pro max.jpg`,
        price: `$25.78`,
        quantity: 1,
        deliveryDate: `Mon, Dec, 27`
    }, {
        name: `Lipstick`,
        image: `../desktop-laptop-computer.webp`,
        price: `$10.12`,
        quantity: 1,
        deliveryDate: `Mon, Dec, 27`
    }
    ]
}

function pricing() {
    let itemPriceAccumulator = 0
    for (i = 0; i < cart.length; i++) {
        itemPriceAccumulator += Number(cart[i].price * 100)

    }
    items.textContent = `Items(${cart.length})`
    itemsPriceSum.textContent = `$${(itemPriceAccumulator / 100).toFixed(2)}`

    let taxBeforeCents = itemPriceAccumulator + Shipping * 100
    taxBefore.textContent = `$${(taxBeforeCents / 100).toFixed(2)}`

    let tax = taxBeforeCents * 0.01
    estimatedTax.textContent = `$${((tax / 100).toFixed(2))}`

    let netPay = tax + taxBeforeCents
    orderTotal.textContent = `$${(netPay / 100).toFixed(2)}`
}
pricing()

let html = ``

function updateCartData() {

    const firstDate = new Date()

    const secondDate = new Date()
    secondDate.setHours(24 * 3)

    const thirdDate = new Date()
    thirdDate.setHours(24 * 6)

    for (i = 0; i < cart.length; i++) {
        html += `
             <div class="item">
                   <div>
                    <h3>Expected Delivery date: <span class="delivery-date" style="color: green;display:block">${cart[i].deliveryDate}</span></h3>
                    <img width="250px" src="${cart[i].image}" alt="">
                    <p>${cart[i].name}</p>
                    <p>Price:${cart[i].price}</p>
                    <p>Quantity:${cart[i].quantity}</p>
                    <button class="remove-btn">Remove</button>
                   </div>
                   <div class="delivery-day">
                    <h3>Choose Delivery Option</h3>
                    <div>
                        <input class="radio" type="radio" name="${cart[i].image + cart[i].price}"><label for="">${firstDate.toDateString()}</label>
                          <p>Shipping: $10.00</p>
                    </div>
                    <div>
                        <input class="radio" type="radio" name="${cart[i].image + cart[i].price}"><label for="">${secondDate.toDateString()}</label>
                         <p>Shipping : $5.00</p>
                    </div>
                    <div>
                        <input class="radio" type="radio" name="${cart[i].image + cart[i].price}"><label for="">${thirdDate.toDateString()}</label>
                         <p>Free delivery</p>
                    </div>
                   </div>
    
                </div>
        `
        cartItems.innerHTML = html
        storeCartItems()
    }
}
updateCartData()





const removeBtn = document.querySelectorAll(".remove-btn")

removeBtn.forEach(Element => {

    Element.addEventListener("click", () => {
        const confirm = window.confirm("Are you sure you want to remove this product from your cart?")
        if (confirm) {
            localStorage.removeItem('accumulator')
            Element.parentElement.parentElement.remove();

            cart.splice(Element, 1)
            pricing()
            storecart()
            storeCartItems()
        }
        const itemHeading = document.querySelector(".item-heading")
        itemHeading.textContent = `Checkout List(${cart.length} Item(s) )`
        let itemNumbers = cart.length
        localStorage.setItem('accumulator', JSON.stringify(itemNumbers))

    })

})
const radioBtn = document.querySelectorAll(".radio")

radioBtn.forEach(Element => {
    Element.addEventListener("click", function () {

        Element.parentElement.parentElement.parentElement.querySelector(".delivery-date").textContent = Element.nextSibling.textContent
        storeCartItems()
    })

})


const itemHeading = document.querySelector(".item-heading")
itemHeading.textContent = `Checkout List(${cart.length} Item(s) )`
storecart()




