// Types
import { Resolvers } from './../../../types/resolvers.d'
import {
    MutationSendChatMessageArgs,
    SendChatMessageResponse
} from './../../../types/graph.d'

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver'

// Entities
import Chat from './../../../entities/Chat'
import User from './../../../entities/User'
import Message from './../../../entities/Message'

const resolvers: Resolvers = {
    Mutation: {
        SendChatMessage: privateAuthResolver( 
            async(
                _, 
                args: MutationSendChatMessageArgs, 
                { req, pubSub }
            ): Promise<SendChatMessageResponse> => {
                // Get user from req
                const user: User = req.user

                // Basic Response template
                const response = (
                    ok: boolean,
                    error: string | null,
                    message: Message | null,
                ): SendChatMessageResponse => ({ ok, error, message }) 

            
                try {
                    // Find chat by args.chatId
                    const chat = await Chat.findOne({ id: args.chatId})

                    // If chat is not exist 
                    if(!chat) {
                        return response(false, 'Chat can\'t found', null)
                    }

                    // If chat exist to create message
                    // Check not equals by user.id with passengerId and driverId
                    // End set chat,  and user data
                    if(chat.passengerId === user.id || chat.driverId === user.id) {
                        const message = await Message.create({
                            text: args.text,
                            chat, 
                            user
                        }).save()


                        // Set pusSub.publish by newChatMessage chanel,
                        // and send message in  payload
                        pubSub.publish('newChatMessage',{ MessageSubscription: message })
                        
                        return response(true, null, message)
                    }
                    
                    return response(false, 'Not Authorized', null)

                } catch (error) {
                    return response(false, error.message, null)
                }
            }
        )
    }
}

export default resolvers