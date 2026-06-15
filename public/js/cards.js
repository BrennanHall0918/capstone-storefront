export async function loadAlbums() {
    const response = await fetch("public/data/albums.json");
    return await response.json();
}

function createAlbumCard(album) {

    const article = document.createElement("article");
    article.classList.add("record-card-m");

    article.dataset.bsToggle = "modal";
    article.dataset.bsTarget = `#modal-${album.id}`;


    const figure = document.createElement("figure");
    figure.classList.add("record-card");


    const image = document.createElement("img");
    image.src = album.image;
    image.alt = album.title;


    const body = document.createElement("div");
    body.classList.add("card-body");


    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = album.title;


    const artist = document.createElement("p");
    artist.classList.add("card-text");
    artist.textContent = album.artist;


    const button = document.createElement("button");
    button.classList.add("price-btn");
    button.textContent = "View More";


    body.append(
        title,
        artist,
        button
    );

    figure.append(
        image,
        body
    );

    article.appendChild(figure);


    return article;
}

function createAlbumModal(album) {

    const modal = document.createElement("div");
    modal.classList.add("modal", "fade");
    modal.id = `modal-${album.id}`;
    modal.tabIndex = -1;


    const dialog = document.createElement("div");
    dialog.classList.add(
        "modal-dialog",
        "modal-dialog-centered",
        "modal-lg"
    );


    const content = document.createElement("div");
    content.classList.add("modal-content");


    const header = document.createElement("header");
    header.classList.add("modal-header");


    const title = document.createElement("h5");
    title.classList.add("modal-title");
    title.textContent = album.title;


    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.classList.add("btn-close");
    closeButton.dataset.bsDismiss = "modal";


    header.append(
        title,
        closeButton
    );


    const body = document.createElement("article");
    body.classList.add("modal-body");


    const row = document.createElement("div");
    row.classList.add("row");


    const imageColumn = document.createElement("figure");
    imageColumn.classList.add(
        "col-md-6",
        "text-center"
    );


    const image = document.createElement("img");
    image.src = album.image;
    image.alt = `${album.title} album cover`;
    image.classList.add(
        "img-fluid",
        "rounded"
    );


    imageColumn.appendChild(image);


    const infoColumn = document.createElement("section");
    infoColumn.classList.add("col-md-6");


    const artist = document.createElement("p");
    artist.innerHTML = "<strong>Artist:</strong> ";
    artist.append(album.artist);


    const genre = document.createElement("p");
    genre.innerHTML = "<strong>Genre:</strong> ";
    genre.append(album.genre);


    const price = document.createElement("p");
    price.innerHTML = "<strong>Price:</strong> ";
    price.append(`$${album.price.toFixed(2)}`);


    const description = document.createElement("p");
    description.textContent = album.description;


    const stars = document.createElement("div");
    stars.classList.add(
        "star-rating",
        "mb-2"
    );


    for (let i = 0; i < 5; i++) {

        const star = document.createElement("i");

        if (i < album.rating) {
            star.classList.add("bi", "bi-star-fill");
        } else {
            star.classList.add("bi", "bi-star");
        }

        stars.appendChild(star);
    }


    const buyButton = document.createElement("button");
    buyButton.classList.add(
        "price-btn",
        "buy-btn"
    );

    buyButton.dataset.id = album.id;

    buyButton.innerHTML = `
        <i class="bi bi-cart-plus"></i>
        Add to Cart
    `;


    infoColumn.append(
        artist,
        genre,
        price,
        description,
        stars,
        buyButton
    );


    row.append(
        imageColumn,
        infoColumn
    );


    body.appendChild(row);


    content.append(
        header,
        body
    );


    dialog.appendChild(content);

    modal.appendChild(dialog);


    return modal;
}

function renderAlbums(albums, containerId, modalId) {

    const cardContainer = document.getElementById(containerId);
    const modalContainer = document.getElementById(modalId);

    if (!cardContainer || !modalContainer) return;

    cardContainer.innerHTML = "";
    modalContainer.innerHTML = "";


    albums.forEach(album => {

        const card = createAlbumCard(album);

        cardContainer.appendChild(card);

        const modal = createAlbumModal(album);

        cardContainer.appendChild(modal);
    });

    cartButtons(albums);
}


function cartButtons(albums) {

    document.querySelectorAll(".buy-btn").forEach(button => {

        button.addEventListener("click", ()=> {

            const albumId = button.dataset.id;

            const album = albums.find(album => album.id === albumId);


            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push(album);


            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );


            button.innerHTML = `
                <i class="bi bi-check-circle"></i>
                Added!
            `;

            button.classList.add("added");


            setTimeout(()=> {

                button.innerHTML = `
                    <i class="bi bi-cart-plus"></i>
                    Add to Cart
                `;

                button.classList.remove("added");

            }, 1500);

        });

    });


    document.querySelectorAll(".remove-btn").forEach(button => {

        button.addEventListener("click", ()=> {

            const index = button.dataset.index;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.splice(index, 1);


            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );


            location.reload();

        });

    });

}


export function populateCards(albums) {
    renderAlbums(
        albums,
        "card-container",
        "modal-container"
    );
}


export function featuredCards(albums) {

    const featuredIds = [
        "jubilee",
        "fantasy",
        "sonormal",
        "wormwood"
    ];


    renderAlbums(
        albums.filter(album => featuredIds.includes(album.id)),
        "featured-container",
        "modal-container"
    );
}