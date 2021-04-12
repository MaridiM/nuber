// Types
import { Resolvers } from '../../../types/resolvers'
import { 
    FacebookConnectResponse,
    MutationFacebookConnectArgs,
} from '../../../types/graph'

// Entities
import User from '../../../entities/User'

// Utils
import createJWT from './../../../utils/createJWT'

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
                    const token = createJWT(existingUser.id)
                    return response(true, null, token)
                }
            } catch (error) {
                return response(false, error.message, null)
            }
            
            // Create new User by facebookID
            try {
                const newUser = await User.create({ 
                        ...args, 
                        profilePhoto: `http://graph.facebook.com/${facebookID}/picture?type=square` 
                    }).save()
                
                
                const token = createJWT(newUser.id)
                return response(true, null, token)

            } catch (error) {
                return response(false, error.message, null)
            }
        }
    }
}

export default resolvers