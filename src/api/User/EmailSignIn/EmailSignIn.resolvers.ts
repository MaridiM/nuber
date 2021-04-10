// Types
import { Resolvers } from './../../../types/resolvers.d'
import { 
    EmailSignInResponse,
    MutationEmailSignInArgs
} from './../../../types/graph.d'

// Entities
import User from '../../../entities/User'


const resolvers: Resolvers = {
    Mutation: {
        EmailSignIn: async (
            _, 
            args: MutationEmailSignInArgs
        ): Promise<EmailSignInResponse> => {
            const { email, password } = args
            
            const response = (
                ok: boolean,
                error: string | null,
                token: string | null
            ): EmailSignInResponse => ({
                ok, error, token
            }) 

            // Sign In by Email
            try {
                const user = await User.findOne({ email })
                if(!user) {
                    return response(true, null, "No User found with that email!")
                }
                
                const checkPassword = await user.comparePassword(password)
                if(checkPassword) {
                    return response(true, null, 'Coming Soon!')
                } else {
                    return response(false, 'Wrong password!', null)
                }
            } catch (error) {
                return response(false, error.message, null)
            }

        }
    }
}

export default resolvers