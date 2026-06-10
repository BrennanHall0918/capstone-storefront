const cardContainer = document.getElementById("card-container");
const modalContainer = document.getElementById("modal-container");

export async function loadAlbums() {
    const response = await fetch("/public/data/albums.json");
    return await response.json();
}

export function populateCards(albums) {

    cardContainer.innerHTML = "";
    modalContainer.innerHTML = "";

    albums.forEach(album => {

        cardContainer.innerHTML += `
            <article
                class="record-card-m"
                data-bs-toggle="modal"
                data-bs-target="#modal-${album.id}">

                <figure class="record-card">
                    <img src="${album.image}" alt="${album.title}">

                    <div class="card-body">
                        <h5 class="card-title">${album.title}</h5>
                        <p class="card-text">${album.artist}</p>
                        <button class="price-btn">
                            View More
                        </button>
                    </div>
                </figure>

            </article>
        `;

        const stars =
            `<i class="bi bi-star-fill"></i>`.repeat(album.rating) +
            `<i class="bi bi-star"></i>`.repeat(5 - album.rating);

        modalContainer.innerHTML += `
            <div
                class="modal fade"
                id="modal-${album.id}"
                tabindex="-1">

                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">

                        <header class="modal-header">
                            <h5 class="modal-title">${album.title}</h5>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal">
                            </button>
                        </header>

                        <article class="modal-body">
                            <div class="row">

                                <figure class="col-md-6 text-center">
                                    <img
                                        src="${album.image}"
                                        class="img-fluid rounded"
                                        alt="${album.title} album cover">
                                </figure>

                                <section class="col-md-6">
                                    <p><strong>Artist:</strong> ${album.artist}</p>
                                    <p><strong>Genre:</strong> ${album.genre}</p>
                                    <p><strong>Price:</strong> $${album.price.toFixed(2)}</p>
                                    <p>${album.description}</p>

                                    <div class="star-rating mb-2">
                                        ${stars}
                                    </div>

                                    <button class="price-btn">
                                        Buy Now!
                                    </button>
                                </section>

                            </div>
                        </article>

                    </div>
                </div>

            </div>
        `;
    });
}