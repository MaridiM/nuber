// Core
import React, { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import { GoogleApiWrapper, IProvidedProps } from 'google-maps-react'
import { RouteComponentProps } from 'react-router'

// Local
import HomePresenter from './HomePresenter'

// Hooks
import { useProfile } from './../../@hooks'

// Types
interface IProps extends IProvidedProps, RouteComponentProps<any> {}
interface IState {
    lat: number
    lng: number
}



const HomeContainer: FC<IProps> = ({ google }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const mapRef: MutableRefObject<any> = useRef()
    const [state, setState] = useState<IState>({
        lat: 0, 
        lng: 0
    });

    let map: google.maps.Map
    let userMarker: google.maps.Marker

    console.log(state)

    useEffect(() => {
          // Function for getting geolocation and set on load map
        const handleGeoSuccess = (position: GeolocationPosition): void => {
            const { coords: { latitude: lat, longitude: lng } } = position
            loadMap(lat, lng)
            setState( state => ({ ...state, lat, lng }))
        }
        
        // Handler for error geolocation
        const handleGeoError: PositionErrorCallback = (): void => console.log("No location") 

        // Get current position
        navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)

    })

    function loadMap (lat: number, lng: number): google.maps.Map<Element> {
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
        


        // User Marker options
        const userMarkerOptions: google.maps.MarkerOptions = {
            position: { lat, lng},
            icon: {
                // Set  icon  on map, to watching by user coords
                path: maps.SymbolPath.CIRCLE,
                scale: 7
            }
        }
        // Create user marker, and setMap
        userMarker = new maps.Marker(userMarkerOptions)
        userMarker.setMap(map)



        // Watching Options, for update api
        const watchOptions: PositionOptions = { enableHighAccuracy: true }
        // Watching geo position by current position 
        // when  user move, position is updated
        navigator
            .geolocation
            .watchPosition(handleGeoWatchSuccess, handleGeoWatchError, watchOptions) 
        
        return map

    }

    // Handlers by watching positions
    function handleGeoWatchSuccess (position: GeolocationPosition): void {
        const { 
            coords: { 
                latitude: lat, 
                longitude: lng
            }
        } = position

        // Set new position 
        userMarker.setPosition({lat, lng})
        // Fallow map by user coords
        map.panTo({lat, lng})
    }
    function handleGeoWatchError () {
        console.log('Error watching you')
    }

    // Query
    const { userDataLoading } = useProfile()
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return <HomePresenter 
        loading={userDataLoading}
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen}
        mapRef={mapRef}
    />
}

export default  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY || ''
})(HomeContainer)
