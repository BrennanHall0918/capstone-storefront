// Featured Section
import { loadAlbums, populateCards } from "./cards.js";
import { initSearch } from "./search.js";

const albums = await loadAlbums();

populateCards(albums);

initSearch(albums, populateCards);