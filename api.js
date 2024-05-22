import axios from 'axios'


// export function getAllEvents(latitudeValue, longitudeValue, radiusValue){

// return axios.get('https://www.skiddle.com/api/v1/events/search/?api_key=53e664e9d779d1a9ba1d2a248bb01777/&',
//     {params :{
// latitude: latitudeValue,
// longitude: longitudeValue,
// radius: radiusValue
//     }}
// )
// .then(({data})=>{
   
//     return data.results})

// }

export function getAllEvents(latitude, longitude, radius){
    console.log(latitude , longitude, radius)
    return axios.get(`https://www.skiddle.com/api/v1/events/search/?api_key=53e664e9d779d1a9ba1d2a248bb01777/&`, {
        params: {
            latitude: latitude,
            longitude: longitude,
            radius: radius
        }}
    )
    .then(({data})=>{
       
        return data.results})
}

// Maps
export function fetchLatitudeAndLongitude(locationSearch) {
    return axios.get(`https://nominatim.openstreetmap.org/search?q=gb%20${locationSearch}&format=json&addressdetails=1&limit=1&polygon_svg=1`)
    .then(({data})=>{
        return {latitude: data[0].lat, longitude: data[0].lon}
    })
}