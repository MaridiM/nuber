// Types
import { Resolvers } from './../../../types/resolvers.d';
import {
    QueryGetRideArgs,
    GetRideResponse
} from './../../../types/graph.d';

// Utils
import  privateAuthResolver from './../../../utils/privateAuthResolver';

// Entities
import User from './../../../entities/User';
import Ride from './../../../entities/Ride';


const resolvers: Resolvers = {
    Query: {
        GetRide: privateAuthResolver(
            async(
                _,
                args: QueryGetRideArgs,
                { req }
            ): Promise<GetRideResponse> => {
                // Get user from req
                const user: User = req.user

                // Basic Response template
                const response = (
                    ok: boolean,
                    error: string | null,
                    ride: Ride | null
                ): GetRideResponse => ({ ok, error, ride }) 

                try {

                    // Try to find a ride by args.rideId
                    // End relations [passenger, driver] 
                    const ride = await Ride.findOne({ id: args.rideId })

                    // If ride is not found
                    if(!ride) {
                        return response(false, 'Ride not found', null )
                    }

                    if(ride.passengerId === user.id || ride.driverId === user.id) {
                        return response(true, null, ride )  
                    }
                    
                    // If ride is not exist,
                    return response(false, 'Not Authorized', null )
                    
                    
                } catch (error) {
                    // Return Error 
                    return response(false, error.message, null )  
                }
            }
        )
    } 
}

export default resolvers