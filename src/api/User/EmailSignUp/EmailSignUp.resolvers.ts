// Types
import { Resolvers } from './../../../types/resolvers.d';
import { 
    EmailSignInResponse,
    MutationEmailSignUpArgs
} from './../../../types/graph.d';

// Entities
import User from './../../../entities/User';

const resolvers: Resolvers = {
    Mutation: {
        EmailSignUp: async (
            _,
            args: MutationEmailSignUpArgs
        ): Promise<EmailSignInResponse> => {
            const { email } = args
            try {

                // Existing user
                const existingUser = await User.findOne({ email })
                if( existingUser ) {
                    return { 
                        ok: false,
                        error: 'You should log in instead'
                    }
                }
                // Create new user
                await User.create({ ...args }).save()

                return { 
                    ok: true,
                    error: null,
                    token: 'Coming soon!' 
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