const itemsForSale = {iceCream : [
    {name: 'vanilla', img: 'https://images.unsplash.com/photo-1614014077943-840960ce6694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: 3},
    {name: 'chocolate', img: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: 3},
    {name: 'strawberry', img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: 3},
    {name: 'blueberry', img: 'https://images.unsplash.com/photo-1505075232616-5aea40f97c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: 3}
],
vessels : [
    {name: 'cone', img: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', price: 2},
    {name: 'bowl', img: 'https://images.unsplash.com/photo-1510035618584-c442b241abe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80', price: 1},

]


}

let toppings = [
    {name: 'sprinkles', img: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: 1},
    {name: 'fudge', img: 'https://images.unsplash.com/photo-1606767417330-49d6e395a214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: 1}
]
// const vessels = [
//     {name: 'cone', img: 'https://images.unsplash.com/photo-1505075232616-5aea40f97c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: 2},
//     {name: 'bowl', img: 'https://images.unsplash.com/photo-1505075232616-5aea40f97c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: 1},
// ]
// const toppings = [
//     {name: 'sprinkles', img: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: 1},
//     {name: 'fudge', img: 'https://images.unsplash.com/photo-1606767417330-49d6e395a214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: 1},
// ]

let cart = []
let total = 0

function drawIceCream() {
    template = ''
    let all = [...itemsForSale.iceCream, ...itemsForSale.vessels, ...toppings]
    all.forEach(flavor => {
        template += `
    <div class="col-6" onclick="atc('${flavor.name}')">
        <img  class="img-fluid" src="${flavor.img}" alt="">
    <div class="d-flex justify-content-around"> 
                            <h5>${flavor.name}</h5>
                            <h5>$${flavor.price}</h5>
                        </div>
                        </div>
        `
    })
    document.getElementById('item-menu').innerHTML = template
}

// function drawVessels() {
//     template = ''
//     itemsForSale.vessels.forEach(flavor => {
//         template += `
//     <div class="col-6" onclick="atc('${flavor.name}')">
//         <img  class="img-fluid" src="${flavor.img}" alt="">
//     <div class="d-flex justify-content-around"> 
//                             <h5>${flavor.name}</h5>
//                             <h5>$${flavor.price}</h5>
//                         </div>
//                         </div>
//         `
//     })
//     document.getElementById('item-menu').innerHTML += template
// }

drawIceCream()
// drawVessels()
drawCart()

function drawCart() {
    let template = ''
    cart.forEach(item => {
        template += `
        <div class="col-12">
        <div class="d-flex justify-content-between"
        <h5 class="text-light">1 ${item.name} </h5>
      <h5>$${item.price}</h5>
      </div>
      </div>

        
        `
    })
    document.getElementById('cart').innerHTML = template
    document.getElementById('total').innerHTML = total

}

function atc(name) {
    let all = [...itemsForSale.iceCream, ...itemsForSale.vessels, ...toppings]
let addedItem = all.find(i => i.name == name)

console.log(addedItem);
cart.push(addedItem)

total += addedItem.price

drawCart()

}


function resetCart() {
    cart = []
    total = 0
    drawCart()
}

// function atcVessel(name) {
//     let addedVessel = vessels.find(i => i.name == name)
// console.log(addedVessel);

// cart.push(addedVessel)
// total += addedVessel.price

// drawCart()
// }