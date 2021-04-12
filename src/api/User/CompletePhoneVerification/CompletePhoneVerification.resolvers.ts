// Types
import { Resolvers } from './../../../types/resolvers.d';
import {
    MutationCompletePhoneVerificationArgs,
    CompletePhoneVerificationResponse,
} from './../../../types/graph.d';

// Entities
import Verification from './../../../entities/Verification'
import User from './../../../entities/User';

// Utils
import createJWT from './../../../utils/createJWT';

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
                    verification.save()
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
                    
                    const token = createJWT(user.id)
                    return response(true, null, token)
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