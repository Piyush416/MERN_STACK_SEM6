const items = [
    { name: "Smartphone", price: 699, category: "electronics" },
    { name: "Laptop", price: 1299, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
    { name: "Headphones", price: 149, category: "electronics" },
    { name: "Bluetooth Speaker", price: 99, category: "electronics" },
    { name: "T-Shirt", price: 25, category: "fashion" },
    { name: "Jeans", price: 50, category: "fashion" },
    { name: "Jacket", price: 100, category: "fashion" },
    { name: "Sneakers", price: 80, category: "fashion" },
    { name: "Handbag", price: 60, category: "fashion" },
    { name: "Sofa", price: 500, category: "home items" },
    { name: "Dining Table", price: 750, category: "home items" },
    { name: "Desk Lamp", price: 40, category: "home items" },
    { name: "Curtains", price: 70, category: "home items" },
    { name: "Rug", price: 120, category: "home items" },
    { name: "Tablet", price: 350, category: "electronics" },
    { name: "Blender", price: 150, category: "home items" },
    { name: "Sunglasses", price: 120, category: "fashion" },
    { name: "Gaming Console", price: 499, category: "electronics" },
    { name: "Bookshelf", price: 200, category: "home items" }
];



// let cards = document.querySelector(".cards")
let cards = document.getElementById("card")
let categorySelect = document.querySelector(".drop-content")
let drop_btn = document.querySelector(".drop-btn")



// let cards = document.querySelector(".parent");
// let categorySelect = document.getElementById("cars");

let selectedCategory

function myfun(selectedCategory) {
    drop_btn.textContent = selectedCategory.toUpperCase()
    items.filter(item => item.category === selectedCategory).forEach(item => {
        cards.innerHTML += `
            <div class="items">
            <img src="https://picsum.photos/200/200">
            <h3>Product: ${item.name}</h3>
            <p>Price: ${item.price}$</p>
            <p>Category: ${item.category}</p>
            <button>ADD ME</button>
            </div>
        `;
    })
}



items.forEach(item => {
    cards.innerHTML += `
            <div class="items">
            <img src="https://picsum.photos/200/200">
            <h3>Product: ${item.name}</h3>
            <p>Price: ${item.price}$</p>
            <p>Category: ${item.category}</p>
            <button>ADD ME</button>
            </div>
        `;
})


categorySelect.addEventListener('click', (event) => {
    selectedCategory = event.target.value;
    cards.innerHTML = '';

    if (selectedCategory === 'electronics') {

        myfun(selectedCategory)
    }

    else if (selectedCategory === 'fashion') {
        myfun(selectedCategory)
    }

    else if (selectedCategory === 'home items') {
        myfun(selectedCategory)
    }
    else {
        items.forEach(item => {
            cards.innerHTML += `
                <div class="items">
                <img src="https://picsum.photos/200/200">
                <h3>Product: ${item.name}</h3>
                <p>Price: ${item.price}$</p>
                <p>Category: ${item.category}</p>
                <button>ADD ME</button>
                </div>
            `;
        })
    }

});





// dropContent.addEventListener('change', (event) => {
//     cards.innerHTML = '';
//     const selectedCategory = event.target.textContent;
//     console.log(selectedCategory);

//     items.forEach(item => {
//         cards.innerHTML += `
//             <div class="items">
//                 <p>Product: ${item.name}</p>
//                 <p>Price: $${item.price}</p>
//                 <p>Category: ${item.category}</p>
//             </div>
//         `;
//     });



// if (selectedCategory === 'electronics') {
//     items.filter(i => i.category === 'electronics').forEach(i => {
//         cards.innerHTML += `
//         <div class="items">
//             <img src="https://picsum.photos/200">
//             <h3>Product: ${i.name}</h3>
//             <p>Price: ${i.price}$</p>
//             <p>Category: ${i.category}</p>
//             <button>ADD ME</button>
//         </div>
//     `;
//     })
// }
// })






// dropContent.addEventListener("click", (event) => {
//     const selectedCategory = event.target.textContent
//     renderCards(selectedCategory)
// })

// function renderCards(category) {
//     cards.innerHTML = '';

//     const selectedItems = items.map((i) => {
//         return i
//     }).filter((i) => {
//         return i.category === category
//     })

//     selectedItems.forEach((i) => {
//         console.log(i);
//         const div = document.createElement("div")
//         div.classList.add("items")
//         div.innerHTML = `
//         <img src="https://picsum.photos/200">
//         <h3>Product: ${i.name}</h3>
//         <p>Price: ${i.price}$</p>
//         <button>ADD ME</button>
//         `
//         cards.appendChild(div);
//     })

// }



// electronicitems.forEach((i) => {
//     let div = document.createElement("div")
//     div.classList.add("items")
//     div.innerHTML = `
//             <img src="https://picsum.photos/200">
//             <h3>Product: ${i.name}</h3>
//             <p>Price: ${i.price}$</p>
//             <button>ADD ME</button>
//             `
//     cards.appendChild(div);
// })



// electronicbtn.addEventListener("click", () => {

// })








// let div = document.createElement("div")
// let img = document.createElement("img")
// let name = document.createElement("p")
// let price= document.createElement("p")
// div.classList.add("items")

// img.attributes.src = "https://picsum.photos/200"
// name.textContent = "Name"
// price.textContent = "Price"
// div.appendChild(img)
// div.appendChild(name)
// div.appendChild(price)
// console.log(div)

// cards.appendChild(div)


// div.innerHTML = `
// <img src="https://picsum.photos/200">
// <h3>Name:</h3>
// <p>Price:</p>
// <button>ADD</button>
// `

//     // let img = document.createElement("img")
//     // let name = document.createElement("p")
//     // let price= document.createElement("p")
//     // let category = document.createElement("p")
//     // let nameV = name.innerHTML = i.name
//     // let priceV = price.textContent = i.price
//     // let categoryV = category.textContent = i.category

//     // div.appendChild(img)
//     // div.appendChild(nameV)
//     // div.appendChild(priceV)
//     // div.appendChild(categoryV)
//     // cards.appendChild(div)

