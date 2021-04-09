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
            
            // Existing User by facebookID
            try {
                const existingUser = await User.findOne({ facebookID })
                if(existingUser) {
                    return {
                        ok: true,
                        error: null,
                        token: "Coming soon"
                    }
                }
            } catch (error) {
                return { 
                    ok: false,
                    error: error.message,
                    token: null
                }
            }
            
            // Create new User by facebookID
            try {
                await User.create({ 
                        ...args, 
                        profilePhoto: `http://graph.facebook.com/${facebookID}/picture?type=square` 
                    }).save()
                    
                return {
                    ok: true,
                    error: null,
                    token: "Coming soon"
                }

            } catch (error) {
                return { 
                    ok: false,
                    error: error.message,
                    token: null
                }
            }
        }
    }
}

export default resolvers