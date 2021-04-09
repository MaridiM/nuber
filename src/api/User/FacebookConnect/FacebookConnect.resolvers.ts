// Types
import { Resolvers } from '../../../types/resolvers'
import { 
    FacebookConnectResponse,
    MutationFacebookConnectArgs,
} from '../../../types/graph'

// Entities
import User from '../../../entities/User'


const resolvers : Resolvers = {
    Mutation: {
        FacebookConnect: async (
            _, 
            args: MutationFacebookConnectArgs
        ): Promise<FacebookConnectResponse> => {
            
            const { facebookID } = args

            const response = (
                ok: boolean,
                error: string | null,
                token: string | null
            ): FacebookConnectResponse => ({
                ok, error, token
            }) 
            
            // Existing User by facebookID
            try {
                const existingUser = await User.findOne({ facebookID })
                if(existingUser) {
                    return response(true, null, 'Coming soon already')
                }
            } catch (error) {
                return response(false, error.message, null)
            }
            
            // Create new User by facebookID
            try {
                await User.create({ 
                        ...args, 
                        profilePhoto: `http://graph.facebook.com/${facebookID}/picture?type=square` 
                    }).save()
                    
               return response(true, null, 'Coming soon created')

            } catch (error) {
                return response(false, error.message, null)
            }
        }
    }
}

export default resolvers