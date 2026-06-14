export function populateNavbar() {
    const navbarContainer = document.getElementById("navbar-container").innerHTML = 
    `
        <nav class="navbar navbar-expand-lg ww-navbar sticky-top" id="nav">
            <section class="container-fluid">

                <a href="index.html" class="navbar-brand">
                    <img
                        src="assets/images/wwlogo.png"
                        alt="Wax and Wire logo"
                        width="100">
                </a>

                <button
                    class="navbar-toggler navbar-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                    aria-controls="navMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon"></span>
                </button>

                <article class="collapse navbar-collapse" id="navMenu">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link">Home</a>
                        </li>

                        <li class="nav-item">
                            <a href="catalog.html" class="nav-link">Shop</a>
                        </li>

                        <li class="nav-item">
                            <a href="about.html" class="nav-link">About Us</a>
                        </li>

                        <li class="nav-item">
                            <a href="contact.html" class="nav-link">Contact</a>
                        </li>

                        <li class="nav-item">
                            <a href="cart.html" class="nav-link"><i class="bi bi-cart"></i></a>
                        </li>

                    </ul>
                </article>

            </section>
        </nav>
    `;
}