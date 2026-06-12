const cartContainer = document.getElementById("cart-container");
const totalPrice = document.getElementById("cart-total");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {

    cartContainer.innerHTML = `
    <h3>Your cart is empty.</h3>
    `;

    totalPrice.textContent = "Total: $0.00";
}

let total = 0;

cart.forEach((album, index) => {

    total += album.price;

    cartContainer.innerHTML += `
        <div class="record-card mb-3">
            <img src="${album.image}" alt="${album.title}">
            <div class="card-body">
                <h5>${album.title}</h5>
                <p>${album.artist}</p>
                <p>$${album.price.toFixed(2)}</p>

                <button
                    class="btn btn-danger remove-btn"
                    data-index="${index}">
                    Remove
                </button>
            </div>
        </div>`;
});

document.querySelectorAll(".remove-btn").forEach(button => {

    button.addEventListener('click', ()=> {
        const index = button.dataset.index;

        cart.splice(index, 1);

        localStorage.setItem(
        "cart",
        JSON.stringify(cart)
        );

        location.reload();
            
    });
});

totalPrice.textContent = `Total $${total.toFixed(2)}`;