export function populateFooter() {
    document.getElementById('footer-container').innerHTML = 
    `
    <footer class="footer py-5">
        <div class="container text-center text-md-start">
            <div class="row">

                <section class="col-md-4 mb-4">
                    <h5 class="footer-title">Wax & Wire</h5>
                    <p>Hand-selected vinyl records delivered with care. Discover music that speaks to your soul.</p>
                </section>


                <section class="col-md-4 mb-4">
                    <h5 class="footer-title">Contact Us</h5>
                    <p>
                    <i class="bi bi-telephone-fill"></i> +1 (123) 456-7890<br>
                    <i class="bi bi-envelope-fill"></i> support@waxandwire.com<br>
                    <i class="bi bi-geo-alt-fill"></i> 1600 Pennsylvania Ave NW, Washington, DC 20500
                    </p>

                    <nav class="social-links">
                        <a href="#" class="me-2"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="me-2"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="me-2"><i class="bi bi-twitter"></i></a>
                    </nav>
                </section>

                <section class="col-md-4 mb-4">
                    <h5 class="footer-title">Subscribe to Our Newsletter</h5>
                    <form class="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start gap-2">
                        <input type="email" class="form-control" placeholder="Enter your email">
                        <button class="btn btn-primary" type="submit">Subscribe</button>
                    </form>
                </section>
            </div>

        <hr class="mt-4 mb-3" style="border-color: rgba(255,255,255,0.2);">
        <p class="text-center mb-0">&copy; 2026 Site by <a href="https://github.com">Brennan Hall</a>. All rights reserved.</p>

        </div>
    </footer>
    `;
}