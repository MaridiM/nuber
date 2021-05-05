// Core
import axios from "axios"
import { toast } from "react-toastify"

export const geoCode = async (address: string): Promise<any> => {
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    const { data } = await axios(URL)
    if (data.error_message) {
        toast.error(data.error_message)
        return false
    }
    const { results } = data
    const firstPlace = results[0]
    const { 
            formatted_address, 
            geometry: { 
                location: { lat, lng } 
            } 
        } = firstPlace
    return  { formatted_address,  lat, lng }
}


export const reverseGeoCode = async (lat: number, lng: number): Promise<any> => {
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    const { data } = await axios(URL)
    if (data.error_message) {
        toast.error(data.error_message)
        return false
    }
    const { results } = data
    const firstPlace = results[0]
    
    if(!firstPlace) return false

    const address = firstPlace.formatted_address
    return address
}