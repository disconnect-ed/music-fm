import * as axios from 'axios';


const key = 'a1976dd334d85d2a880225cfe49e652c';
const href = 'http://ws.audioscrobbler.com/2.0/?method=';

export const albumAPI = {
    searchAlbum(albumName, page, limit = 20) {
        return (
            axios.get(`${href}album.search&album=${albumName}&api_key=${key}&format=json&limit=${limit}&page=${page}`)
        )
    },
    getInfo(albumId) {
        return (
            axios.get(`${href}album.getinfo&api_key=${key}&lang=ru&mbid=${albumId}&format=json`)
        )
    }
}


export const authAPI = {
    getSession(authToken, authHash) {
        return (
            axios.post(`${href}auth.getSession&token=${authToken}&api_key=${key}&format=json&api_sig=${authHash}`)
        )
    }
}

export const userAPI = {
    getInfo(user) {
        return (
            axios.get(`${href}user.getInfo&user=${user}&api_key=${key}&format=json`)
        )
    },
    getLovedTracks(user, page, limit = 10) {
        return (
            axios.get(`${href}user.getLovedTracks&user=${user}&api_key=${key}&format=json&limit=${limit}&page=${page}`)
        )
    },
    getTopArtists(user, page, limit = 8) {
        return (
            axios.get(`${href}user.getTopArtists&user=${user}&api_key=${key}&format=json&limit=${limit}&page=${page}`)
        )
    },
    getTopAlbums(user, page, limit = 8) {
        return (
            axios.get(`${href}user.getTopAlbums&user=${user}&api_key=${key}&format=json&limit=${limit}&page=${page}`)
        )
    },
    getFriends(user, page, limit = 10) {
        return (
            axios.get(`${href}user.getFriends&user=${user}&api_key=${key}&format=json&page=${page}&limit=${limit}`)
        )
    }
}


export const trackAPI = {
    getInfo(trackArtistName, trackName) {
        return (
            axios.get(`${href}track.getInfo&track=${trackName}&api_key=${key}&format=json&artist=${trackArtistName}`)
        )
    },
    getSimilar(trackArtistName, trackName) {
        return (
            axios.get(`${href}track.getsimilar&artist=${trackArtistName}&track=${trackName}&api_key=${key}&format=json`)
        )
    },
    searchTrack(trackName, page, limit = 30) {
        return (
            axios.get(`${href}track.search&track=${trackName}&api_key=${key}&format=json&limit=${limit}&page=${page}`)
        )
    }
}



export const artistAPI = {
    getInfo(artistId) {
        return (
            axios.get(`${href}artist.getinfo&mbid=${artistId}&api_key=${key}&format=json&lang=ru`)
        )
    },
    getSimilar(artistId) {
        debugger
        return (
            axios.get(`${href}artist.getsimilar&api_key=${key}&format=json&limit=12&mbid=${artistId}`)
        )
    },
    getTopTracks(artistId) {
        return (
            axios.get(`${href}artist.gettoptracks&mbid=${artistId}&api_key=${key}&format=json&limit=10`)
        )
    },
    searchArtist(name, page = 1, pageSize = 20) {
        return (
            axios.get(`${href}artist.search&artist=${name}&api_key=${key}&format=json&limit=${pageSize}&page=${page}`)
        )
    },
    getTopAlbums(artistId, page, limit = 8) {
        return (
            axios.get(`${href}artist.gettopalbums&mbid=${artistId}&api_key=${key}&format=json&limit=${limit}&page=${page}`)
        )
    }
}

export const geoAPI = {
    getTopArtist() {
        return (
            axios.get(`${href}geo.gettopartists&country=Belarus&api_key=${key}&format=json&limit=8`)
        )
    },
    getTopTracks() {
        return (
            axios.get(`${href}geo.gettoptracks&country=belarus&api_key=${key}&format=json&limit=10`)
        )
    },
}

export const chartAPI = {
    getTopArtists() {
        return (
            axios.get(`${href}chart.gettopartists&api_key=${key}&format=json&limit=8`)
        )
    },
    getTopTracks() {
        return (
            axios.get(`${href}chart.gettoptracks&api_key=${key}&format=json&limit=10`)
        )
    }
}

