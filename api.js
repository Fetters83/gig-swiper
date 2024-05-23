import axios from "axios";
const Buffer = require('buffer/').Buffer
const client_id = process.env.EXPO_PUBLIC_CLIENT_ID
const client_secret = process.env.EXPO_PUBLIC_CLIENT_SECRET


export function getAllEvents(latitude, longitude, radius) {
    console.log(latitude, longitude, radius);
    return axios
        .get(
            `https://www.skiddle.com/api/v1/events/search/?api_key=53e664e9d779d1a9ba1d2a248bb01777/&`,
            {
                params: {
                    latitude: latitude,
                    longitude: longitude,
                    radius: radius,
                    limit: 100,
                },
            }
        )
        .then(({ data }) => {
            return data.results;
        });
}

// Maps
export function fetchLatitudeAndLongitude(locationSearch) {
    return axios
        .get(
            `https://nominatim.openstreetmap.org/search?q=gb%20${locationSearch}&format=json&addressdetails=1&limit=1&polygon_svg=1`
        )
        .then(({ data }) => {
            return { latitude: data[0].lat, longitude: data[0].lon };
        });
}



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




axios.post(url, null,authOptions).then((response)=>{
      return response.data.access_token
  
  }).catch((error)=>{
    console.log(error)
  })