const cartContainer = document.getElementById("cart-container");
const totalPrice = document.getElementById("cart-total");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(album => {

    total += album.price;

    cartContainer.innerHTML += `
        <div class="record-card mb-3">
            <img src="${album.image}" alt="${album.title}">
            <div class="card-body">
                <h5>${album.title}</h5>
                <p>${album.artist}</p>
                <p>$${album.price.toFixed(2)}</p>
            </div>
        </div>`;
});

totalPrice.textContent = `Total $${total.toFixed(2)}`;