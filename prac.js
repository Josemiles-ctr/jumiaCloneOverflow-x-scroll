const products = document.querySelector(".products");
const search = document.querySelector(".search");
//localStorage.removeItem('accumulator')
function getItemNumber() {
    itemNumber.innerHTML = JSON.parse(localStorage.getItem('accumulator'))
}
function setItemNumber() {
    localStorage.setItem('accumulator', JSON.stringify(itemNumber.innerHTML))
}
getItemNumber()
if (!itemNumber.innerHTML) {
    itemNumber.innerHTML = 0
}



const productsArray = [{
    image: `113 pro max.jpg`,
    name: `113 Pro Max`,
    price: `$93.43`,
    rating: 2783,
    stars: `&star;&star;&star;&#x2605;`

}, {
    image: `Ac Gaming Mouse Pro.jpg`,
    name: `Ac Gaming Mouse Pro`,
    price: `$13.83`,
    rating: 64,
    stars: `&star;&star;&#x2605;`

}, {
    image: `AKE Decorder.jpg`,
    name: `AKE Decorder`,
    price: `$12.09`,
    rating: 290,
    stars: `&star;&star;&#x2605;`


}, {
    image: `Taata Bed.jpg`,
    name: `Taata Bed`,
    price: `$909.32`,
    rating: 923,
    stars: `&star;&star;&#x2605;`


}, {
    image: `Multimedia Keyboard.jpg`,
    name: `Multimedia KeyBoard`,
    price: `$13.89`,
    rating: 89,
    stars: `&star;&star;&#x2605;`


}, {
    image: `Maxi Mouse.jpg`,
    name: `Maxi Mouse`,
    price: `$12.51`,
    rating: 903,
    stars: `&star;&star;&#x2605;`

}, {
    image: `desktop-laptop-computer.webp`,
    name: `Desktop Laptop Computer`,
    price: `$90.87`,
    rating: 23,
    stars: `&star;&star;&star;&#x2605;`


}, {
    image: `Basket ball.jpg`,
    name: `Basket ball`,
    price: `$103.60`,
    rating: 56,
    stars: `&star;&star;&#x2605;`
}, {
    image: `Colorfull ball.jpg`,
    name: `Colorful Ball`,
    price: `$10.71`,
    rating: 78,
    stars: `&star;&star;&star;&#x2605;`
}, {
    image: `Eye pensils.jpg`,
    name: `Eye pensils`,
    price: `$1.66`,
    rating: 98,
    stars: `&star;&star;&star;&#x2605;`
}, {
    image: `High quality camera.jpeg`,
    name: `High quality Camera`,
    price: `$209.88`,
    rating: 76,
    stars: `&star;&star;&#x2605;`
}, {
    image: `DSTV-Explora-Decoder.webp`,
    name: `DSTV Explora Decorder`,
    price: `$89.80`,
    rating: 86,
    stars: `&star;&star;`
}, {
    image: `Lipstick.jpg`,
    name: `Lip sticks`,
    price: `$8.54`,
    rating: 21,
    stars: `&star;&star;&#x2605;&#x2605;`
}, {
    image: `Ear puds.jpg`,
    name: `Ear Puds`,
    price: `$3.54`,
    rating: 71,
    stars: `&star;&#x2605;&#x2605;`
}, {
    image: `Playing Ball.jpg`,
    name: `Playing Ball`,
    price: `$12.39`,
    rating: 38,
    stars: `&star;&star;&#x2605;&#x2605;`
}, {
    image: `School bag.jpeg`,
    name: `School Bag`,
    price: `$10.21`,
    rating: 308,
    stars: `&star;&#x2605;&#x2605;`
}, {
    image: `Sildril Jacket.jpg`,
    name: `Sildril Jacket`,
    price: `$21.01`,
    rating: 18,
    stars: `&star;&star;&#x2605;&#x2605;`
},
{

    image: `O-max pro.jpg`,
    name: `O-max Pro`,
    price: `$121.91`,
    rating: 38,
    stars: `&star;&star;&#x2605;&#x2605;`
}, {
    image: `Electric cooker.jpg`,
    name: `Electric Cooker`,
    price: `$42.39`,
    rating: 38,
    stars: `&star;&star;&#x2605;&#x2605;`
}, {
    image: `Ski care.jpg`,
    name: `Skin Care`,
    price: `$10.99`,
    rating: 66,
    stars: `&star;&star;&#x2605;`
}, {
    image: `Gaming Mouse.jpeg`,
    name: `Gaming Mouse`,
    price: `$32.39`,
    rating: 98,
    stars: `&star;&#x2605;`
}, {
    image: `Golden Fish Bed.png`,
    name: `Golden Fish Bed`,
    price: `$99.12`,
    rating: 678,
    stars: `&star;&#x2605;&#x2605;`

}, {

    image: `Guac mouse.jpg`,
    name: `Guac Mouse`,
    price: `$13.99`,
    rating: 124,
    stars: `&star;&star;&#x2605;&#x2605;`
}, {

    image: `Handi Pressure Cooker.png`,
    name: `Handi Pressure Cooker`,
    price: `$75.99`,
    rating: 978,
    stars: `&star;&#x2605;`
}, {

    image: `Indies jacket.jpg`,
    name: `Indies Jackets`,
    price: `$23.99`,
    rating: 78,
    stars: `&star;&star;&#x2605;`
}, {
    image: `HeadSets.jpg`,
    name: `Luxury Headsets`,
    price: `$46.80`,
    rating: 708,
    stars: `&star;&#x2605;&star;&#x2605;`

},
{
    image: `Infinite Pistle Keyboard.png`,
    name: `Infinite Pistle Keyboard`,
    price: `$35.67`,
    rating: 788,
    stars: `&star;&#x2605;&star;`

}, {
    image: `Israel Extension.jpg`,
    name: `Isreal Extension`,
    price: `$6.71`,
    rating: 788,
    stars: `&#x2605;&star;`

}, {
    image: `Jamper Middle.webp`,
    name: `Jamper Middle Size`,
    price: `$13.13`,
    rating: 195,
    stars: `&star;&#x2605;&star;`

}, {
    image: `A-line Dress.jpg`,
    name: `A-line Dress`,
    price: `$13.99`,
    rating: 606,
    stars: `&star;&star;&#x2605;&#x2605;`
},
{
    image: `Beckett-Simonon.jpg`,
    name: `Beckett-Simonon`,
    price: `$16.78`,
    rating: 78,
    stars: `&star;&star;&#x2605;`
},

{
    image: `Boots.jpg`,
    name: `Boots`,
    price: `$10.12`,
    rating: 142,
    stars: `&star;&#x2605;&#x2605;&#x2605;`
},
{
    image: `Sprays.jpg`,
    name: `Perfumes and Sprays`,
    price: `$12.78`,
    rating: 88,
    stars: `&star;&star;&#x2605;&#x2605;&#x2605;`
}
    , {

    image: `Chinos.jpg`,
    name: `Chinos Shoes`,
    price: `$120.43`,
    rating: 65,
    stars: `&star;&star;&#x2605;&#x2605;&#x2605;`
}, {

    image: `Derby Shoes.jpg`,
    name: `Derby Shoes`,
    price: `$120.09`,
    rating: 88,
    stars: `&star;&star;&#x2605;&#x2605;`
}, {

    image: `Desert Walker.jpg`,
    name: `Desert Walker Shoes`,
    price: `$20.67`,
    rating: 90,
    stars: `&star;&star;&#x2605;&#x2605;`
}, {

    image: `Driver.jpg`,
    name: `Driver Shoes`,
    price: `$18.78`,
    rating: 100,
    stars: `&star;&star;&#x2605;;`
}, {

    image: `Gentle Boots.jpg`,
    name: `Gentle Men Boots`,
    price: `$120.78`,
    rating: 67,
    stars: `&star;&star;&#x2605;&#x2605;&#x2605;`
}, {

    image: `Monk Strap Shoes.jpg`,
    name: `Monk Strap Shoes`,
    price: `$18.32`,
    rating: 808,
    stars: `&star;&star;&#x2605;`
}, {

    image: `Omega.jpg`,
    name: `Omega For Men`,
    price: `$120.78`,
    rating: 789,
    stars: `&star;&star;&#x2605;`
}, {

    image: `Lengthy Time Extension.jpg`,
    name: `Lengthy Time Extension`,
    price: `$15.09`,
    rating: 423,
    stars: `&star;&star;&#x2605;&#x2605;`
},
{

    image: `Rolex.jpg`,
    name: `Rolex Watch`,
    price: `$17.78`,
    rating: 188,
    stars: `&star;&star;&#x2605;&#x2605;&#x2605;`
}, {

    image: `Sandle Shoes.png`,
    name: `Sandle Shoes`,
    price: `$9.17`,
    rating: 68,
    stars: `&star;&star;&#x2605;&#x2605;`
}, {

    image: `SummerPant.jpg`,
    name: `Summer Pant`,
    price: `$22.70`,
    rating: 88,
    stars: `&star;&star;&#x2605;&#x2605;&#x2605;`
}, {

    image: `SweetPants.jpg`,
    name: `Sweet Pants`,
    price: `$19.00`,
    rating: 97,
    stars: `&star;&#x2605;&#x2605;&#x2605;`
}, {

    image: `Swift Dress.jpg`,
    name: `Swift Dress`,
    price: `$23.08`,
    rating: 88,
    stars: `&star;&star;&#x2605;&#x2605;&#x2605;`
}, {

    image: `TAG Heuer.jpg`,
    name: `TAG Heuer`,
    price: `$120.78`,
    rating: 123,
    stars: `&star;&star;&#x2605;&#x2605;`
}, {

    image: `Suede Belt.jpg`,
    name: `Suede Belt`,
    price: `$120.90`,
    rating: 88,
    stars: `&star;&star;&#x2605;&#x2605;&#x2605;`
}]


let htmlEl = ``
//original outlook of the site in normal state
function original() {
    for (i = 0; i < productsArray.length; i++) {
        htmlEl += `<div class="form">
               <div class="content">
                    <img height="150px" src="../${productsArray[i].image}" alt="">
                
                <h3>${productsArray[i].name}</h3>
                 <p>Price : ${productsArray[i].price}</p>
                 <LAbel>Rating: ${productsArray[i].rating} </LAbel><br>  <label for="stars" >Stars :</label>
                <label class="stars">${productsArray[i].stars}</label><br>
                <button class="addToCartBtn">Add to cart</button>
                <select name="" id="select">
            <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
        </select>
            </div>
        </div>
        `
    }
    products.innerHTML = htmlEl
}
original()
products.innerHTML = htmlEl

/*Searching for products and then getting back to
oriinal structure if the search is empty */
search.onkeyup = function duplicate(callback) {
    products.innerHTML = ``
    let result = [{}]
    let input = search.value
    if (search.value) {
        for (i = 0; i < productsArray.length; i++) {
            if (productsArray[i].name.toLowerCase().includes(input.toLowerCase())) {
                result.push(productsArray[i])

            }
        }

        result.splice(result[0], 1)
        for (i = 0; i < result.length; i++) {
            htmlEl = `<div class="form">
               <div class="content">
                    <img height="150px" src="../${result[i].image}" alt="">
                
                <h3>${result[i].name}</h3>
                 <p>Price : ${result[i].price}</p>
                 <LAbel>Rating: ${result[i].rating} </LAbel><br>  <label for="stars" >Stars :</label>
                <label class="stars">${result[i].stars}</label><br>
                <button class="addToCartBtn">Add to cart</button>
                <select name="" id="selection">
            <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
        </select>
            </div>
        </div>
        `
            products.innerHTML += htmlEl

        }

    }
    if (!products.innerHTML) {
        let empty = `<h2>No search results found!</h2>`
        products.innerHTML = empty
    }
    if (input.length < 1) {
        htmlEl = ``
        original()
    }
}

/*involves pushing details of a product to a cart array to be 
used in the checkout page*/
const addToCartBtn = document.querySelectorAll(".addToCartBtn");
addToCartBtn.forEach(Element => {
    Element.addEventListener("click", () => {

        getCart()

        const quantity = Element.nextElementSibling.value
        const image = Element.parentElement.firstElementChild.getAttribute('src')

        const name = (Element.parentElement.firstChild.nextElementSibling.nextElementSibling.innerText)
        let priceText = (Element.parentElement.firstChild.
            nextElementSibling.nextElementSibling.
            nextElementSibling.
            innerText)
        const priceString = [...priceText].
            filter(Element => {
                return Element === `.` || Element === `0`
                    || Element === `1` || Element === `2` || Element === `3`
                    || Element === `4` || Element === `5` || Element === `6`
                    || Element === `7` || Element === `8` || Element === `9`
            })

        const price = Number(priceString.join(``))
        itemNumber.innerHTML = Number(quantity) + Number(itemNumber.textContent)
        localStorage.setItem('accumulator', JSON.stringify(itemNumber.innerHTML))



        const date = new Date().toDateString();
        const object = {
            deliveryDate: date,
            image: String(image),
            name: name,
            price: price,
            quantity: Number(quantity)
        }

        cart.push(object)
        storecart()





    })
})
