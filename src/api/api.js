import * as axios from 'axios';


const key = 'a1976dd334d85d2a880225cfe49e652c';

export const albumAPI = {
    searchAlbum(albumName) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${albumName}&api_key=${key}&format=json&limit=20`)
        )
    },
    getInfo(albumId) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${key}&lang=ru&mbid=${albumId}&format=json`)
        )
    }
}


export const authAPI = {
    getSession(authToken, authHash) {
        return (
            axios.post(`http://ws.audioscrobbler.com/2.0/?method=auth.getSession&token=${authToken}&api_key=${key}&format=json&api_sig=${authHash}`)
        )
    }
}

export const userAPI = {
    getInfo(user) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getInfo&user=${user}&api_key=${key}&format=json`)
        )
    },
    getLovedTracks(user) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getLovedTracks&user=${user}&api_key=${key}&format=json`)
        )
    },
    getTopArtists(user) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=${user}&api_key=${key}&format=json&limit=8`)
        )
    },
    getTopAlbums(user) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getTopAlbums&user=${user}&api_key=${key}&format=json&limit=8`)
        )
    },
    getFriends(user) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getFriends&user=${user}&api_key=${key}&format=json`)
        )
    }
}


export const trackAPI = {
    getInfo(trackArtistName, trackName) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&track=${trackName}&api_key=${key}&format=json&artist=${trackArtistName}`)
        )
    },
    getSimilar(trackArtistName, trackName) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${trackArtistName}&track=${trackName}&api_key=${key}&format=json`)
        )
    },
    searchTrack(trackName) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=${key}&format=json&limit=30`)
        )
    }
}



export const artistAPI = {
    getInfo(artistId) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${artistId}&api_key=${key}&format=json&lang=ru`)
        )
    },
    getSimilar(artistId) {
        debugger
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&api_key=${key}&format=json&limit=12&mbid=${artistId}`)
        )
    },
    getTopTracks(artistId) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${artistId}&api_key=${key}&format=json&limit=10`)
        )
    },
    searchArtist(name, page = 1) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=${key}&format=json&limit=20&page=${page}`)
        )
    },
    getTopAlbums(artistId) {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${artistId}&api_key=${key}&format=json&limit=8`)
        )
    }
}

export const geoAPI = {
    getTopArtist() {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=Belarus&api_key=${key}&format=json&limit=8`)
        )
    },
    getTopTracks() {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=belarus&api_key=${key}&format=json&limit=10`)
        )
    },
}

export const chartAPI = {
    getTopArtists() {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${key}&format=json&limit=8`)
        )
    },
    getTopTracks() {
        return (
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${key}&format=json&limit=10`)
        )
    }
}

