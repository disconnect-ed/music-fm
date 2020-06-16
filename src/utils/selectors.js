
export const getArtistTopAlbumsData = (state) => {

    if (state.artist.artistTopAlbums) {
        let arr = state.artist.artistTopAlbums;
        let artistTopAlbumsData = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === '(null)') continue;
            artistTopAlbumsData.push(arr[i])
        }
        return artistTopAlbumsData;
    }
}