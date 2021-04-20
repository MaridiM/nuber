// Core
import { Between } from 'typeorm'

// Types
import { Resolvers } from './../../../types/resolvers.d'
import { GetNearbyRideResponse } from './../../../types/graph.d'

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver'

// Entities
import User from './../../../entities/User'
import Ride from './../../../entities/Ride';


const resolvers: Resolvers = {
    Query: {
        GetNearbyRide: privateAuthResolver(
            async( _, __, { req }): Promise<GetNearbyRideResponse> => { 
                // Get user from req
                const user: User = req.user
                const { lastLat, lastLng } = user
                if(user.isDriving) {
                    try {
                        if( lastLat !== undefined && lastLng !== undefined) {
                            // Find All rides by params 
                            const ride = await Ride.findOne({
                                status: 'REQUESTING',
                                pickUpLat: Between(lastLat  - 0.05, lastLat + 0.05),
                                pickUpLng: Between(lastLng  - 0.05, lastLng + 0.05),
                            })
    
                            if(ride) {
                                return {
                                    ok: true,
                                    error: null,
                                    ride,
                                }
                            } else {
                                return {
                                    ok: true,
                                    error: null,
                                    ride: null
                                }

                            }
                        }
                        return {
                            ok: false,
                            error: 'Not found driver\'s coordinates!',
                            ride: null
                        }
                        
                    } catch (error) {
                        return { 
                            ok: false,
                            error: error.message,
                            ride: null
                        }
                    } 
                } else {
                    return { 
                        ok: false,
                        error: 'You are not a driver!',
                        ride: null 
                    }
                }

            }
        
        )
    }
}

export default resolvers