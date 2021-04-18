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
            { req, pubSub }) 
        : Promise<RequestRideResponse> => { 
            // Get user from req
            const user: User = req.user
            
            // If user.isRiding 
            if(! user.isRiding) {
                try {
                    // Create Ride
                    const ride = await Ride.create({ ...args, passenger: user }).save()
                    // Publish in pubsub in chanel rideRequest, where send ride i nearbyRideDescription
                    pubSub.publish('rideRequest', { NearbyRideDescription: ride })
                    
                    // Set user.isRiding to true 
                    user.isRiding = false
                    user.save()
    
                    return { 
                        ok: true,
                        error: null,
                        ride
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
                    error: 'You can\'t request two rides',
                    ride: null

                }
            }
            
            
        })
    }
}

export default resolvers