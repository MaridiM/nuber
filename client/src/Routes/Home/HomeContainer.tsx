// Core
import React, { ChangeEventHandler, FC, MouseEventHandler, MutableRefObject, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { GoogleApiWrapper, IProvidedProps } from 'google-maps-react'
import { loader } from 'graphql.macro'
import { RouteComponentProps } from 'react-router'
import { useMutation, useQuery } from '@apollo/client'

// Local
import HomePresenter from './HomePresenter'

// Hooks
import { useProfile } from './../../@hooks'

// Utils
import { 
    geoCode, 
    // reverseGeoCode 
} from './../../@utils'

// Types
import { 
    GetNearbyDriversQuery,
    GetNearbyDriversQueryVariables,
    ReportMovementMutation,
    ReportMovementMutationVariables,
    RequestRideMutation,
    RequestRideMutationVariables
} from './../../@types/api' 

interface IProps extends IProvidedProps, RouteComponentProps<any> {}
interface IState {
    lat: number
    lng: number
    toAddress: string
    fromAddress: string
    toLat: number
    toLng: number
    price?: string
    distance: string
    duration?: string
}

// GraphQL
const QUERY_GET_NEARBY_DRIVERS = loader('./gql/GetNearbyDrivers.graphql')
const MUTATION_REPORT_MOVEMENT = loader('./gql/ReportMovement.graphql')
const MUTATION_REQUEST_RIDE = loader('./gql/RequestRide.graphql')



const HomeContainer: FC<IProps> = ({ google }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const mapRef: MutableRefObject<any> = useRef<HTMLDivElement>()
    const [state, setState] = useState<IState>({
        lat: 0, 
        lng: 0,
        toAddress: 'вулиця Степана Бандери, 9, Борщів, Тернопільська область, Украина, 48700',
        fromAddress: '',
        toLat: 0,
        toLng: 0,
        price: undefined,
        distance: '',
        duration: '',
    })

    let map: google.maps.Map
    let userMarker: google.maps.Marker
    let toMarker: google.maps.Marker
    let directions: google.maps.DirectionsRenderer
    let driverMarkers: google.maps.Marker[] = []

    // Query
    const { userDataLoading, userData } = useProfile()
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    // GraphQL Requests 
    const [ _reportMovement ]= useMutation<ReportMovementMutation, ReportMovementMutationVariables>(MUTATION_REPORT_MOVEMENT)
    const [ _requestRide ]= useMutation<RequestRideMutation, RequestRideMutationVariables>(MUTATION_REQUEST_RIDE, {
        variables: {
            pickUpAddress: state.fromAddress,
            pickUpLat: state.lat,
            pickUpLng: state.lng,
            dropOffAddress: state.toAddress,
            dropOffLat: state.toLat,
            dropOffLng: state.toLng,
            price: Number(state.price) || 0,
            distance: state.distance,
            duration: state.duration || '',
        }
    })
    
    useQuery<GetNearbyDriversQuery, GetNearbyDriversQueryVariables>(QUERY_GET_NEARBY_DRIVERS, { 
        skip: (userData && userData.GetMyProfile.user?.isDriving) || false,
        pollInterval: 10000,                     // Re fetching avery 5s
        notifyOnNetworkStatusChange: true,      // Reset onCompleted, after pollInterval request
        onCompleted: ( data ) => {
            const { GetNearbyDrivers: { drivers, ok} } = data

            console.log(directions)

            if (ok && drivers) {
                // Set markers nearby drivers
                drivers && drivers.forEach(driver => {
                    // Get map 
                    // if( state.lat !== 0 && state.lng !== 0){
                    //     map = loadMap(state.lat, state.lng)
                    // }

                    if (driver && driver.lastLat && driver.lastLng) {
                        // Check existing driver
                        const existingDriver:
                            | google.maps.Marker
                            | undefined = driverMarkers.find((driverMarker: google.maps.Marker) => {
                            const markerID = driverMarker.get('ID')
                            return markerID === driver!.id
                        })
                        // If driver is existing, to set Position 
                        // Else create new marker
                        if (existingDriver) {
                            existingDriver.setPosition({ 
                                lat: Number(driver!.lastLat),
                                lng: Number(driver!.lastLng)
                            })
                            existingDriver.setMap(map)
                        } else {
                            // Set marker option for nearby  driver
                            const markerOptions: google.maps.MarkerOptions = {
                                icon: {
                                    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                    scale: 4
                                },
                                position: {
                                    lat: Number(driver!.lastLat),
                                    lng: Number(driver!.lastLng),
                                },
                            }
                            // Create marker for nearby driver
                            // Set Id driver
                            // Set marker in map
                            const newMarker: google.maps.Marker = new google.maps.Marker(markerOptions)
        
                            newMarker.set('ID', driver!.id)
                            newMarker.setMap(map)
                            driverMarkers.push(newMarker)

                        }
                    }
                })
            }
        },
    })

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

        // if(state.toLat && state.toLng) {
        //      createPath()
        // }
    })
    
    // Get form address by lat | lng
    // const getFromAddress = async (lat: number, lng: number): Promise<void> => {
    //     const address = await reverseGeoCode(lat, lng)
    //     if(address) {
    //         setState(state => ({
    //             ...state,
    //             fromAddress: address
    //         }))
    //     }
    // } 

    
    const loadMap = (lat: number, lng: number): google.maps.Map<Element> => {
        // Set maps constructor
        const maps = google.maps
        
        // If current is no exist to reload map
        if(!mapRef.current) {
            return loadMap(lat, lng)
        }
        // Set mapConfig
        const mapConfig: google.maps.MapOptions = {
            center: { lat, lng },
            disableDefaultUI: true,
            zoom: 14, 
            minZoom: 3,
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
        // userMarker.setPosition(new google.maps.LatLng(lat, lng))
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
    async function handleGeoWatchSuccess (position: GeolocationPosition): Promise<void> {
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

        // Report movement by server
        await _reportMovement({
            variables: {
                lastLat: lat,
                lastLng: lng
            }
        })


    }
    function handleGeoWatchError () {
        console.log('Error watching you')
    }

    // Submit Address
    const onAddressSubmit: MouseEventHandler<HTMLButtonElement> = async (): Promise<void> => { 
        const { toAddress } = state
        const result = await geoCode(toAddress)

        if( result !== false) {
            const { lat, lng, formatted_address: toAddress } = result
            
            if(toMarker) {
                toMarker.setMap(null)
            }
            
            // Get map
            map = await loadMap(state.lat, state.lng)
            // User Marker options
            const toMarkerOptions: google.maps.MarkerOptions = {
                position: { lat, lng }
            }
            // Create user marker, and setMap
            toMarker = new google.maps.Marker(toMarkerOptions)
            // Create toMarker on map 
            toMarker.setMap(map)

            // Bounds, for up map and show two places( drivers and user)
            const bounds = new google.maps.LatLngBounds()
            // Driver Coords
            bounds.extend({ lat, lng })
            // User Coords
            bounds.extend({ lat: state.lat, lng: state.lng })
            map.fitBounds(bounds)

            await setState(state => ({ 
                ...state, 
                toAddress, 
                toLat: lat, 
                toLng: lng 
            }))
            // Create path  after setState
            console.log({ 
                toAddress, 
                toLat: lat, 
                toLng: lng 
            })
            createPath()
        }

    }
    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event): void => { 
        const { name, value } = event.target
        setState(state => ({ 
            ...state, 
            [name]: value
        }))
    }
    const onInputBlur = async (): Promise<void> => {
        // Get Address, and coords from input
        const result = await geoCode(state.toAddress)
        if(result !== false) {
            const { lat, lng, formatted_address: toAddress } = result
            setState( state => ({
                ...state,
                toAddress,
                toLat: lat, 
                toLng: lng  
            }))
            
            // Change place by address and new coords
            map = await loadMap(lat, lng)
            const LatLng: google.maps.LatLng = new google.maps.LatLng(lat, lng)
            map.panTo(LatLng)

            
        } 
    }
    
    // Function for directions
    // Crete route line from cords to 
    function createPath () {
        const { toLat, toLng, lat, lng } = state
        if(directions) {
            directions.setMap(null)
        }

        // Render Directions options
        const renderOptions: google.maps.DirectionsRendererOptions = {
            suppressMarkers: true,             
            polylineOptions: { 
                strokeColor: '#000'
            },
        }
        // Create new direction render and set renderer options
        directions = new google.maps.DirectionsRenderer(renderOptions)

        // Create Directions service
        const directionsService: google.maps.DirectionsService = new google.maps.DirectionsService()

        // Set coords from and to 
        const to = new google.maps.LatLng({lat: toLat, lng: toLng})
        const from = new google.maps.LatLng({lat, lng})

        // Set settings to route
        const directionsOptions: google.maps.DirectionsRequest = {
            destination: to, 
            origin: from,
            travelMode: google.maps.TravelMode.DRIVING
        }

        // Set in service.route, directionOptionst with from  and to coords
        directionsService.route( directionsOptions, handleRouteRequest )
    }


    // Handler for route request for direction service
    async function handleRouteRequest (
        result: google.maps.DirectionsResult, 
        status: google.maps.DirectionsStatus
    ): Promise<void> {

        if (status === google.maps.DirectionsStatus.OK){
            const { routes } = result
            const { 
                distance: { text: distance },
                duration: { text: duration }
            } = routes[0].legs[0]

            directions.setDirections(result)
            directions.setMap(map)
            await setState(state => ({ ...state, duration, distance}))
            setPrice()
            
        } else {
            toast.error('There is no route, you have to ')
        }

    }


    // Set Price by Distance and driving
    function setPrice () {
        if ( state.distance ) {
            setState( state => ({ 
                ...state, 
                price: Number(parseFloat(state.distance!.replace(',', '')) * 3).toFixed(2)
            }))
        }
    }

    return <HomePresenter 
        loading={userDataLoading}
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen}
        mapRef={mapRef}
        onAddressSubmit={onAddressSubmit}
        onInputChange={onInputChange}
        onBlur={onInputBlur}
        data={userData}
        _requestRide={_requestRide}
        { ...state }
    />

}

export default  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY || ''
})(HomeContainer)