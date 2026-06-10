const searchBar = document.querySelector('.search-bar');

export function initSearch(albums, renderCards) {
    // doesn't do anything while search is empty
    if (!searchBar) return;

    searchBar.addEventListener('input', ()=> {
        // turns input text into something comparable to json
        const searchTerm = searchBar.value.toLowerCase().trim();

        // matches input with album title, artist, and/or genre
        const filteredAlbums = albums.filter(album =>
            album.title.toLowerCase().includes(searchTerm) ||
            album.artist.toLowerCase().includes(searchTerm) ||
            album.genre.toLowerCase().includes(searchTerm)
        );

        // Renders the searched cards
        renderCards(filteredAlbums);

    })
}