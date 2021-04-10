// Types
import { Resolvers } from './../../../types/resolvers.d';
import {
    MutationCompletePhoneVerificationArgs,
    CompletePhoneVerificationResponse,
} from './../../../types/graph.d';

// Entities
import Verification from './../../../entities/Verification'
import User from './../../../entities/User';

const resolvers: Resolvers = {
    Mutation: {
        CompletePhoneVerification: async (
            _,
            args: MutationCompletePhoneVerificationArgs
        ): Promise<CompletePhoneVerificationResponse> => {
            const { phoneNumber, key } = args

            const response = (
                ok: boolean,
                error: string | null,
                token: string | null
            ): CompletePhoneVerificationResponse => ({
                ok, error, token
            })
            
            // Verification phone
            try {
                // Find phone and key for verification
                const verification = await Verification.findOne({
                    payload: phoneNumber,
                    key          
                })
                
                // If not exist verification, return error,
                // else set verified in verification 
                if(!verification) {
                    return response(false, 'Verification key not valid', null)
                } else { 
                    verification.verified = true
                }

            } catch (error) {
                return response(false, error.message, null)
            }
            
            // Verification user
            try {
                //  Finding user by phoneNumber
                const user = await User.findOne({ phoneNumber })
                
                // If User if found, set verifiedPhoneNumber = true 
                // and return response
                // else return ok = true, without error and token
                if (user) {
                    user.verifiedPhoneNumber = true
                    user.save()
                    return response(true, null, 'Coming Soon!')
                } else {
                    return response(true, null, null)
                }

            } catch (error) {
                return response(false, error.message, null)
            }

        }
    }
}

export default resolvers