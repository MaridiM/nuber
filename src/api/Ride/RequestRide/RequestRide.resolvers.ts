// Types
import { Resolvers } from './../../../types/resolvers.d';
import { 
    MutationRequestRideArgs,
    RequestRideResponse
} from './../../../types/graph.d';

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver'

// Entities
import User from './../../../entities/User';
import Ride from './../../../entities/Ride';

const resolvers: Resolvers = {
    Mutation: {
        RequestRide: privateAuthResolver(
        async (
            _, 
            args: MutationRequestRideArgs, 
            { req }) 
        : Promise<RequestRideResponse> => { 
            // Get user from req
            const user: User = req.user
            try {
                // Create Ride
                const ride = await Ride.create({ ...args, passenger: user }).save()

                return { 
                    ok: true,
                    error: null,
                    ride
                }

            } catch (error) {
                return {
                    ok: false,
                    error: error.message
                }
            }
            
        })
    }
}

export default resolvers