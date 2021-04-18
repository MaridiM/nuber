// Types
import { Resolvers } from './../../../types/resolvers.d';
import { 
    UpdateRideStatusResponse, 
    MutationUpdateRideStatusArgs 
} from './../../../types/graph.d';

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver';

// Entities
import Chat from './../../../entities/Chat'
import Ride from './../../../entities/Ride'
import User from './../../../entities/User'


const resolvers: Resolvers = {
    Mutation: {
        UpdateRideStatus: privateAuthResolver(
            async (
                _,
                args: MutationUpdateRideStatusArgs,
                { req, pubSub }
            ): Promise<UpdateRideStatusResponse> => {
                // Get user from req
                const user: User = req.user
                
                if(!user.isDriving) {
                    // If !user.isDriving return  error
                    return { 
                        ok: false,
                        error: 'You are not driving'
                    }
                } 

                // If user isDriving 
                try {
                    let ride: Ride | undefined 
                    
                    // Check status by 'ACCEPTED'
                    if(args.status === 'ACCEPTED') {
                        // If args.status === 'ACCEPTED'
                        // Find one rider user by user id and status "requesting"
                        ride = await Ride.findOne(
                            {
                                id: args.rideId,
                                status: 'REQUESTING'
                            }, 
                            { relations: ["passenger"] }
                        )
                        
                        // Set in ride.driver user data
                        // St user.isTaken = true and save him
                        if(ride) {
                            // Set isTaken = true in user
                            ride.driver = user
                            user.isTaken = true
                            user.save()

                            // Create chat room 
                            await Chat.create({ 
                                driver: user,
                                passenger: ride.passenger
                            }).save()

                        } 
                    } else {
                        // If args.status !== 'ACCEPTED'
                        // Find ride by ride id
                        ride = await Ride.findOne({ 
                            id: args.rideId 
                        })
                    }

                    // If not found ride return error
                    if(!ride){ 
                        return { 
                            ok: false,
                            error: 'Can\'t update ride'
                        }
                    }

                    // If exist ride to set status from args
                    // And save
                    ride.status = args.status
                    ride.save()

                    // Publish in pubsub in chanel rideRequest, where send ride i nearbyRideDescription
                    pubSub.publish('rideUpdate', { RideStatusSubscription: ride })                    

                    return {
                        ok: true,
                        error: null
                    }

                } catch (error) {
                    return {
                        ok: false,
                        error: error.message
                    }
                }
                    

            }
        )
    }
}

export default resolvers