// Types
import { Resolvers } from './../../../types/resolvers'
import {
    CompleteEmailVerificationResponse,
    MutationCompleteEmailVerificationArgs
} from './../../../types/graph'

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver';

// Entities
import User from './../../../entities/User'
import Verification from './../../../entities/Verification'


const resolvers: Resolvers = {
    Mutation: {
        CompleteEmailVerification: privateAuthResolver( async (
            _, 
            { key }: MutationCompleteEmailVerificationArgs, 
            { req }
        ): Promise<CompleteEmailVerificationResponse> => {  
            // Get user from req
            const user: User = req.user

            if(user.email) {
                try {
                    // Find verification by user.email and key
                    const verification = await Verification.findOne({ 
                        key, 
                        payload: user.email 
                    })
                    
                    // If verification exist, to set use verifiedEmail = true
                    //  else return error 
                    if(verification) {
                        user.verifiedEmail = true
                        user.save()
                        verification.verified = true
                        verification.save()

                        return {
                            ok: true,
                            error: null
                        }

                    } else {
                        return { 
                            ok: false,
                            error: 'Cant verify email'
                        }
                    }

                } catch (error) {
                    return {
                        ok: false,
                        error: error.message
                    }
                }

            } else {
                // Return error if email don\'t verify
                return { 
                    ok: false,
                    error: 'No email to verify'
                }
            }
        })
    }
}

export default resolvers