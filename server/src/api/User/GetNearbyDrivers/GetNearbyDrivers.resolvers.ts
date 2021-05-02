// Core
import { Between } from 'typeorm'

// Types
import { GetNearbyDriversResponse } from './../../../types/graph.d';
import { Resolvers } from './../../../types/resolvers.d';

// Utils 
import privateAuthResolver from './../../../utils/privateAuthResolver';

// Entities
import User from './../../../entities/User';

const resolvers: Resolvers = {
    Query: {
        GetNearbyDrivers: privateAuthResolver( 
            async ( _, __, { req }): Promise<GetNearbyDriversResponse> => {
                // Get user from req
                const user: User = req.user
                const { lastLat, lastLng } = user

                try {
                    if( lastLat !== undefined && lastLng !== undefined) {
                        const drivers: User[] = await User.find({
                            isDriving: true,
                            lastLat: Between(lastLat - 0.05, lastLat + 0.05), 
                            lastLng: Between(lastLng - 0.05, lastLng + 0.05)
                        })
                        return {
                            ok: true,
                            error: null,
                            drivers
                        }
                    }
                    return {
                        ok: false,
                        error: 'Coordinates not found',
                        drivers: null
                    }
                    
                    
    
                } catch (error) {
                    return {
                        ok: false,
                        error: error.message,
                        drivers: null
                    }
                }
            }
        )
    }
}

export default resolvers