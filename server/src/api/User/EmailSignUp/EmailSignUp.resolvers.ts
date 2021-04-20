// Types
import { Resolvers } from './../../../types/resolvers.d';
import { 
    EmailSignInResponse,
    MutationEmailSignUpArgs
} from './../../../types/graph.d'

// Entities
import Verification from './../../../entities/Verification'
import User from './../../../entities/User'

// Utils
import createJWT from './../../../utils/createJWT'
import { sendVerificationEmail } from './../../../utils/sendEmail'

const resolvers: Resolvers = {
    Mutation: {
        EmailSignUp: async (
            _,
            args: MutationEmailSignUpArgs
        ): Promise<EmailSignInResponse> => {
            const { email, phoneNumber } = args

            try {
                // Existing user
                const existingUser = await User.findOne({ email })
                if( existingUser ) {
                    return { 
                        ok: false,
                        error: 'You should log in instead',
                        token: null
                    }
                }

                // Check to verification phone before create new user
                const phoneVerification = await Verification.findOne({ 
                    payload: phoneNumber, 
                    verified: true
                })

                // If Phone is verified, then create new user 
                if(phoneVerification) {
                    const newUser = await User.create({ ...args }).save()
                    
                    // After created new user, 
                    // crete new  verification key and 
                    // then send verification email
                    if(newUser.email) {
                        // Create Verification
                        const emailVerification = await Verification.create({
                            payload: newUser.email,
                            target: 'EMAIL'
                        }).save()
                        
                        // Send email with verification key
                        await sendVerificationEmail(
                            newUser.email, 
                            newUser.fullName, 
                            emailVerification.key
                        )
                    }
                    
                    const token = createJWT(newUser.id)
    
                    return { 
                        ok: true,
                        error: null,
                        token 
                    }
                } else {
                    return { 
                        ok: true,
                        error: "You haven't verified your phone number",
                        token: null 
                    }
                    
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