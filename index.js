const add = document.querySelector(".add");
const ingrediants = document.querySelector('#ingrediants')
const pickles = add.querySelector('.add-pickles')
const onions = add.querySelector('.add-onions')
const tomato = add.querySelector('.add-tomato')
const lettuce = add.querySelector('.add-lettuce')
const bacon = add.querySelector('.add-bacon')
const cheese = add.querySelector('.add-cheese')
const beef = add.querySelector('.add-beef')
const ketchup = add.querySelector('.add-ketchup')
const btn = document.querySelector('button')

btn.addEventListener("click", () => {
    let arr = []
    let btnInnerText = btn.innerText
    let total = parseFloat(btnInnerText.substring(15))
    console.log(ingrediants)
    let allIngrediants = ingrediants.children
    for(i = 0; i < allIngrediants.length; i++) {
        arr.push(allIngrediants[i].innerText.toLowerCase())
    }
    fetch('http://localhost:3000/orders/1', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "username": 'kevnrod',
            "ingrediants": arr,
            "total": total
        })
    })
})


fetch('http://localhost:3000/ingrediants')
        .then(r => r.json())
        .then(ingArray => ingArray.forEach(renderIngrediants))

function removeIngrediant() {
    const remove = document.querySelector('.remove')
    remove.addEventListener("click", (e) => {
        if (e.target.className === "remove-pickles") {
            const pickles = document.querySelector('.ingrediant.pickles')
            if (pickles) {

            pickles.remove()
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total -= .5
            btn.innerText = `Place Order - $${total.toFixed(2)}`
        }
        }
        if (e.target.className === "remove-onions") {
            const onions = document.querySelector('.ingrediant.onions')
            if(!onions) {
                console.log('bye')
            } else {
                onions.remove()
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total -= .25
            btn.innerText = `Place Order - $${total.toFixed(2)}`
            }
        }
        if (e.target.className === "remove-tomato") {
            const tomato = document.querySelector('.ingrediant.tomato')
            if(!tomato) {
                console.log('bye')
            } else {
            tomato.remove()
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total -= .75
            btn.innerText = `Place Order - $${total.toFixed(2)}`
            }
        }
        if (e.target.className === "remove-lettuce") {
            const lettuce = document.querySelector('.ingrediant.lettuce')
            if(!lettuce) {
                console.log('bye')
            } else {
            lettuce.remove()
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total -= .25
            btn.innerText = `Place Order - $${total.toFixed(2)}`
            }
        }
        if (e.target.className === "remove-bacon") {
            const bacon = document.querySelector('.ingrediant.bacon')
            if (!bacon) {
                console.log('bye')
            } else {
            bacon.remove()
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total -= 2
            btn.innerText = `Place Order - $${total.toFixed(2)}`
            }
        }
        if (e.target.className === "remove-cheese") {
            const cheese = document.querySelector('.ingrediant.cheese')
            if(!cheese) {
                console.log('bye')
            } else {
            cheese.remove()
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total -= 1
            btn.innerText = `Place Order - $${total.toFixed(2)}`
            }
        }
        if (e.target.className === "remove-beef") {
            const beef = document.querySelector('.ingrediant.beef')
            if(!beef) {
                console.log('bye')
            } else {
            beef.remove()
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total -= 10
            btn.innerText = `Place Order - $${total.toFixed(2)}`
            }
        }
        if (e.target.className === "remove-ketchup") {
            const ketchup = document.querySelector('.ingrediant.ketchup')
            if(!ketchup) {
                console.log('bye')
            } else {
            ketchup.remove()
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total -= .25
            btn.innerText = `Place Order - $${total.toFixed(2)}`
            }
        }

    })
}

removeIngrediant()



function renderIngrediants(ingObj) {

    if (ingObj.ingrediant === 'pickles') {
        pickles.addEventListener("click", () => {
        const div = document.createElement('div')
        div.className = "ingrediant pickles"
        div.textContent = "PICKLES"
            ingrediants.append(div)
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total += ingObj.price
            btn.innerText = `Place Order - $${total.toFixed(2)}`

        })
    }

    if (ingObj.ingrediant === 'onions') {
        onions.addEventListener("click", () => {
        const div = document.createElement('div')
        div.className = "ingrediant onions"
        div.textContent = "ONIONS"
            ingrediants.append(div)
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total += ingObj.price
            btn.innerText = `Place Order - $${total.toFixed(2)}`
        })
    }


    if (ingObj.ingrediant === 'tomato') {
        tomato.addEventListener("click", () => {
            const div = document.createElement('div')
            div.className = "ingrediant tomato"
            div.textContent = "TOMATO"
            ingrediants.append(div)
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total += ingObj.price
            btn.innerText = `Place Order - $${total.toFixed(2)}`
        })
    }
    if (ingObj.ingrediant === 'lettuce') {
        lettuce.addEventListener("click", () => {
            const div = document.createElement('div')
            div.className = "ingrediant lettuce"
            div.textContent = "LETTUCE"
            ingrediants.append(div)
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total += ingObj.price
            btn.innerText = `Place Order - $${total.toFixed(2)}`
        })
    }
    if (ingObj.ingrediant === 'bacon') {
        bacon.addEventListener("click", () => {
            const div = document.createElement('div')
            div.className = "ingrediant bacon"
            div.textContent = "BACON"
            ingrediants.append(div)
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total += ingObj.price
            btn.innerText = `Place Order - $${total.toFixed(2)}`
        })
    }
    if (ingObj.ingrediant === 'cheese') {
        cheese.addEventListener("click", () => {
            const div = document.createElement('div')
            div.className = "ingrediant cheese"
            div.textContent = "CHEESE"
            ingrediants.append(div)
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total += ingObj.price
            btn.innerText = `Place Order - $${total.toFixed(2)}`
        })
    }
    if (ingObj.ingrediant === 'beef') {
        beef.addEventListener("click", () => {
            const div = document.createElement('div')
            div.className = "ingrediant beef"
            div.textContent = "BEEF PATTY"
            ingrediants.append(div)
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total += ingObj.price
            btn.innerText = `Place Order - $${total.toFixed(2)}`
        })
    }
    if (ingObj.ingrediant === 'ketchup') {
        ketchup.addEventListener("click", () => {
            const div = document.createElement('div')
            div.className = "ingrediant ketchup"
            div.textContent = "KETCHUP"
            ingrediants.append(div)
            let btnInnerText = btn.innerText
            let total = parseFloat(btnInnerText.substring(15))
            total += ingObj.price
            btn.innerText = `Place Order - $${total.toFixed(2)}`
        })
    }
}


