import axios from "axios";
import { LogBox } from "react-native";



const Buffer = require('buffer/').Buffer
const client_id = process.env.EXPO_PUBLIC_CLIENT_ID
const client_secret = process.env.EXPO_PUBLIC_CLIENT_SECRET

/* On start-up */
let spotifyToken = ''
getSpotifyToken()
.then((response) => {
    spotifyToken = response
})


/* Functions */
    // These could be made extracted, but getArtistTopTrack is invoked in GigCard.jsx ...
    // ... and requires the spotifyToken script

// Open Street Maps
export function fetchLatitudeAndLongitude(locationSearch) {
    return axios
    .get(
        `https://nominatim.openstreetmap.org/search?q=gb%20${locationSearch}&format=json&addressdetails=1&limit=1&polygon_svg=1`
    )
    .then(({ data }) => {
        return { latitude: data[0].lat, longitude: data[0].lon };
    });
}


// Skiddle
export function getAllEvents(latitude, longitude, radius) {
    return axios
        .get(
            `https://www.skiddle.com/api/v1/events/search/?api_key=53e664e9d779d1a9ba1d2a248bb01777/&`,
            { params: {
                    latitude: latitude,
                    longitude: longitude,
                    radius: radius,
                    limit: 100,
                    description:true
                },
            }
        )
        .then(({ data }) => {
            return data.results;
        });
}


// Spotify
function getSpotifyToken() {
    const url = 'https://accounts.spotify.com/api/token';

    const authOptions = {
        params: {
            client_id: client_id,
            client_secret: client_secret,
            grant_type: 'client_credentials'
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };

    return axios.post(url, null, authOptions)
    .then((response) => {
        return response.data.access_token;
    })
    .catch((error) => {
        console.log('in getSpotifyToken error caught:', error);
    });
}


function fetchArtistId(spotifyToken, requiredArtistsName) {
    return axios.get(`https://api.spotify.com/v1/search`, {
        params: {
            q: requiredArtistsName,
            type: "artist",
            market: "GB",
            limit: 5,
            offset: 0
        },
        headers: {
            Authorization: `Bearer ${spotifyToken}`
        }
        }
    )
    .then((response) => {
        let artists = response.data.artists.items
        return getRequiredArtistId(requiredArtistsName, artists)
    })
    .catch((error) => {
        return new Promise.reject(error)
    })
}


function getRequiredArtistId(requiredArtistsName, artists) {
    const matchingArtist = artists.filter((artist) => {
        return artist.name.toLowerCase() === requiredArtistsName.toLowerCase()
    });
    if (matchingArtist.length > 0) {
        return matchingArtist[0].id
    } else {
        return new Promise.reject("no matching artist found")
    }
}


function fetchArtistTopTracks(spotifyToken, artistId) {
    return axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, {
        params: {
            market: "GB",
        },
        headers: {
            Authorization: `Bearer ${spotifyToken}`
        }
        }
    )
    .then((response) => {
        return {topTracks: response.data.tracks}
    })
    .catch((error) => {
        console.log('fetchArtistTopTracks error caught:', error);
    })
}


export function getArtistTopTrack(artistName) {
    return fetchArtistId(spotifyToken, artistName)
    .then((artistId) => {
        return fetchArtistTopTracks(spotifyToken, artistId)
    })
    .then(({ topTracks }) => {
        let topTrack = topTracks[0]
        return topTrack
    })
    .catch((error) => {
        console.log('getArtistTopTrack error caught:', error);
    })
}
