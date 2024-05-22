import axios from 'axios'


export function getAllEvents(){

return axios.get('https://www.skiddle.com/api/v1/events/search/?api_key=53e664e9d779d1a9ba1d2a248bb01777/')
.then(({data})=>{return data.results})

}

// Maps
export function fetchLocation(locationSearch) {
    return axios.get(`https://nominatim.openstreetmap.org/search?q=gb%20${locationSearch}&format=json&addressdetails=1&limit=1&polygon_svg=1`)
.then(({data})=>{
    console.log(data.lat, data.lon);
    return data})
}