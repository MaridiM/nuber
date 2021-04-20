// Core
import { withFilter } from 'graphql-subscriptions'

// Entities
import User from './../../../entities/User'
import Chat from './../../../entities/Chat'

const resolvers = {
    Subscription: {
        MessageSubscription: {
            subscribe: withFilter(
                // Function Chanel
                // Set asyncIterator with name chanel
                (_, __, { pubSub }) => pubSub.asyncIterator('newChatMessage'), 

                // Filter function what return true, 
                // if return false - to return anything
                async (payload, _, { context }) => {
                     // Get user from  context.currentUser
                    const user: User = context.currentUser
                    console.log()
                    
                    // Get chatId  from payload.RideStatusSubscription
                    const { MessageSubscription: {chatId }} = payload
                    
                    try {
                        // Find chat by id
                        const chat = await Chat.findOne({id: chatId})
                        
                        if(!chat) return false

                        // If chat exist to check equals by  
                        // user.id and passengerId and driverId from chat
                        return chat.driverId === user.id || chat.passengerId === user.id

                    } catch (error) {
                        return false
                    }

                }
            )
        }
    }
}

export default resolvers