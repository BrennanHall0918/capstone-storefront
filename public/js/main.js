// Navbar
import { populateNavbar } from "./navbar.js";
populateNavbar();

// Footer
import { populateFooter } from "./footer.js";
populateFooter();

// Albums
import { loadAlbums, populateCards } from "./cards.js";
import { initSearch } from "./search.js";

const albums = await loadAlbums();

populateCards(albums);

initSearch(albums, populateCards);