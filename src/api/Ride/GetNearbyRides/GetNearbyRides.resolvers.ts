// Core
import { Between } from 'typeorm'

// Types
import { Resolvers } from './../../../types/resolvers.d'
import { GetNearbyRidesResponse } from './../../../types/graph.d'

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver'

// Entities
import User from './../../../entities/User'
import Ride from './../../../entities/Ride';


const resolvers: Resolvers = {
    Query: {
        GetNearbyRides: privateAuthResolver(
            async( _, __, { req }): Promise<GetNearbyRidesResponse> => { 
                // Get user from req
                const user: User = req.user
                const { lastLat, lastLng } = user
                if(user.isDriving) {
                    try {
                        if( lastLat !== undefined && lastLng !== undefined) {
                            // Find All rides by params 
                            const rides = await Ride.find({
                                status: 'REQUESTING',
                                pickUpLat: Between(lastLat  - 0.05, lastLat + 0.05),
                                pickUpLng: Between(lastLng  - 0.05, lastLng + 0.05),
                            })
    
                            return {
                                ok: false,
                                error: null,
                                rides,
                            }
                        }
                        return {
                            ok: false,
                            error: 'Not found driver\'s coordinates!',
                            rides: null
                        }
                        
                    } catch (error) {
                        return { 
                            ok: false,
                            error: error.message,
                            rides: null
                        }
                    }
                } else {
                    return { 
                        ok: false,
                        error: 'You are not a driver!',
                        rides: null 
                    }
                }

            }
        
        )
    }
}

export default resolvers