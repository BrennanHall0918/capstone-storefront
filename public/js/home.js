// Album Cards
import { loadAlbums, featuredCards } from "./cards.js";

const albums = await loadAlbums();

featuredCards(albums);