// Core
import React, { ChangeEventHandler, FC,  MouseEventHandler, MutableRefObject, useEffect, useRef, useState } from 'react'
import { GoogleApiWrapper, IProvidedProps } from 'google-maps-react'
import { RouteComponentProps } from 'react-router'

// Local
import FindAddressPresenter from './FindAddressPresenter'

// Utils
import { paths, geoCode, reverseGeoCode } from './../../@utils'

// Types
interface IProps extends IProvidedProps, RouteComponentProps<any> {}
interface IState {
    lat: number
    lng: number 
    address: string
}

const FindAddressContainer: FC<IProps>= ({ history, google }) => {
    const [geoState, setGeoState] = useState<IState>({
        lat: 0,
        lng: 0,
        address: ''
    }) 

    /*
        Google map
    */
    // Create map, and map ref
    const mapRef: MutableRefObject<any> = useRef()
    let map: google.maps.Map

    useEffect(() => {
        // Function for getting geolocation and set on load map
        const handleGeoSuccess = (position: GeolocationPosition): void => {
            const { coords: { latitude: lat, longitude: lng } } = position
            loadMap(lat, lng)
            setGeoState( state => ({ ...state, lat, lng }))
            reverseGeocodeAddress(lat, lng)
        }
        
        // Handler for error geolocation
        const handleGeoError: PositionErrorCallback = (): void => console.log("No location")                                                       
    
        // Get Geolocation
        navigator
            .geolocation
            .getCurrentPosition(handleGeoSuccess, handleGeoError)
            
    }, [setGeoState])

    // Load map in UI, and set config for map
    function loadMap (lat: number, lng: number): google.maps.Map<Element>  {
        
        // Set maps constructor
        const maps = google.maps
        // Set mapConfig
        const mapConfig: google.maps.MapOptions = {
            center: { lat, lng },
            disableDefaultUI: true,
            zoom: 16, 
            minZoom: 10,
            maxZoom: 18
        }

        // Set map on ref div
        map = new maps.Map(mapRef.current, mapConfig)
        
        // Set Google Map events
        map.addListener('dragend', handleDragEnd)   

        return map

    }

    // Handler for addListener Drag End
    // Updated Center, and geolocation
    function handleDragEnd (): void {
        // Get coordinates from loadMap
        const newCenter = map.getCenter()
        const lat = newCenter.lat()
        const lng = newCenter.lng()

        // Set lat/lng coordinates in geoState
        setGeoState(state => ({ 
            ...state,
            lat, 
            lng,
        }))

        reverseGeocodeAddress(lat, lng)
    }

    // Get Geocode Address  and set in geoState
    async function reverseGeocodeAddress (lat: number, lng: number): Promise<void> {
        const reversedAddress = await reverseGeoCode(lat, lng)
        
        // If exist address, set address from reverseGeoCode
        if( reversedAddress !== false) {
            setGeoState(state => ({ 
                ...state,
                address: reversedAddress,
            }))
            return  
        }

    }

    /*
    Input handlers
    */
   
   const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
       const { name, value } = event.target
       setGeoState(state => ({
           ...state,
           [name]: value
        }))
    }
    const onInputBlur = async (): Promise<void> => {
        // Get Address, and coords from input
        const result = await geoCode(geoState.address)
        if(result !== false) {
            const { lat, lng, formatted_address: address } = result
            setGeoState( state => ({
                ...state,
                address,
                lat, 
                lng, 
            }))
            
            // Change place by address and new coords
            map = await loadMap(lat, lng)
            const LatLng: google.maps.LatLng = new google.maps.LatLng(lat, lng)
            map.panTo(LatLng)

            
        } 
    }
    

    // Button handler
    const onPickPlace: MouseEventHandler<HTMLButtonElement> = () => {
        history.push({ 
            pathname: paths.addPlace,
            state: { 
                address: geoState.address, 
                lat: geoState.lat, 
                lng: geoState.lng
            }
        })
    }


    return <FindAddressPresenter
            mapRef={mapRef}
            onChange={onInputChange}        
            onBlur={onInputBlur} 
            onClick={onPickPlace} 
            { ...geoState }
        />
}


export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY || ''
})(FindAddressContainer)
