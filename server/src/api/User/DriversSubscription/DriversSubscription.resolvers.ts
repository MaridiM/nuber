// Core
import { withFilter } from "graphql-subscriptions"

// Entities
import User from "./../../../entities/User";


const resolvers= {
    Subscription: {
        DriversSubscription: {
            subscribe: withFilter(
                // Function Chanel
                // Set asyncIterator with name chanel
                (_, __, { pubSub }) => pubSub.asyncIterator('driverUpdate'), 

                // Filter function what return true, 
                // if return false - to return anything
                (payload, _, { context }) => { 
                    // Get user from  context.currentUser
                    const user: User = context.currentUser

                    // Get driver's last coordinates from payload.DriversSubscription
                    const { 
                        DriversSubscription: { 
                            lastLat: driverLastLat, 
                            lastLng: driverLastLng 
                        }
                    } = payload
                    
                    // Get user's last coordinates from user 
                    const { lastLat: userLastLat, lastLng: userLastLng} = user
                    
                    // Return Position 
                    // Not far like 0.05 lat | lng 
                    return (
                        driverLastLat >= userLastLat! - 0.05 &&
                        driverLastLat <= userLastLat! + 0.05 &&
                        driverLastLng >= userLastLng! - 0.05 &&
                        driverLastLng <= userLastLng! + 0.05 
                    )

                }
            )
        }
    }
}

export default resolvers  