// Core
import { withFilter } from 'graphql-subscriptions'

// Entities
import User from './../../../entities/User'

const resolvers = {
    Subscription: {
        NearbyRideDescription: {
            subscribe: withFilter(
                // Function Chanel
                // Set asyncIterator with name chanel
                (_, __, { pubSub }) => pubSub.asyncIterator('rideRequest'), 

                // Filter function what return true, 
                // if return false - to return anything
                async (payload, _, { context }) => {
                     // Get user from  context.currentUser
                    const user: User = context.currentUser
                    
                    // Get pickUpLng | pickUpLat coordinates from payload.NearbyRideDescription
                    const { NearbyRideDescription: { pickUpLat, pickUpLng }} = payload
                    
                    // Get user's last coordinates from user 
                    const { lastLat: userLastLat, lastLng: userLastLng} = user
                    
                    // Return Position 
                    // Not far like 0.05 lat | lng 
                    return (
                        pickUpLat >= userLastLat! - 0.05 &&
                        pickUpLat <= userLastLat! + 0.05 &&
                        pickUpLng >= userLastLng! - 0.05 &&
                        pickUpLng <= userLastLng! + 0.05 
                    )

                }
            )
        }
    }
}

export default resolvers