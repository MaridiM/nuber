// Types
import { Resolvers } from './../../../types/resolvers.d'
import {
    QueryGetChatArgs,
    GetChatResponse
} from './../../../types/graph.d'

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver'

// Entities
import User from './../../../entities/User'
import Chat from './../../../entities/Chat'

const resolvers: Resolvers = {
    Query: {
        GetChat: privateAuthResolver( 
            async(
                _, 
                args: QueryGetChatArgs, 
                { req }
            ): Promise<GetChatResponse> => {
                // Get user from req
                const user: User = req.user

                // Basic Response template
                const response = (
                    ok: boolean,
                    error: string | null,
                    chat: Chat | null
                ): GetChatResponse => ({ ok, error, chat }) 

            
                try {
                    // Find chat by id from args
                    const chat = await Chat.findOne(
                        { id: args.chatId },
                        { relations: ['passenger', 'driver', 'messages'] }
                    )

                    if(!chat) {
                        return response(false, 'Chat not found', null)
                    }
                    
                    // If chat is found
                    // Check not equals by user.id with passengerId and driverId
                    if(chat.passengerId === user.id || chat.driverId === user.id) {
                        return response(true, null, chat)
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