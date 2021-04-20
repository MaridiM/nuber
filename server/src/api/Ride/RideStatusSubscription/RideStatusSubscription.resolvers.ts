// Core
import { withFilter } from 'graphql-subscriptions'

// Entities
import User from './../../../entities/User'

const resolvers = {
    Subscription: {
        RideStatusSubscription: {
            subscribe: withFilter(
                // Function Chanel
                // Set asyncIterator with name chanel
                (_, __, { pubSub }) => pubSub.asyncIterator('rideUpdate'), 

                // Filter function what return true, 
                // if return false - to return anything
                async (payload, _, { context }) => {
                     // Get user from  context.currentUser
                    const user: User = context.currentUser
                    console.log()
                    
                    // Get pickUpLng | pickUpLat coordinates from payload.NearbyRideDescription
                    const { RideStatusSubscription: { driverId, passengerId }} = payload
                    
                    // Return true or false
                    // If user.id === driverId || user.id === passengerId
                    return user.id === driverId || user.id === passengerId

                }
            )
        }
    }
}

export default resolvers