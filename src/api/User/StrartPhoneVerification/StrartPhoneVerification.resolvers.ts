// Types
import { Resolvers } from './../../../types/resolvers.d'
import { 
    MutationStartPhoneVerificationArgs,
    StartPhoneVerificationResponse, 
} from './../../../types/graph.d'

// Entities
import Verification from './../../../entities/Verification'

// Utils
import { sendVerificationSMS } from './../../../utils/sendSMS'



const resolvers: Resolvers = {
    Mutation: {
        StartPhoneVerification: async (
            _, 
            args: MutationStartPhoneVerificationArgs 
        ): Promise<StartPhoneVerificationResponse> => {
            const { phoneNumber } = args
            try {
                // Existing verification
                const existingVerification = await Verification.findOne({ payload: phoneNumber })
                if(existingVerification) {
                    existingVerification.remove()
                }   
                
                // Create New Verification 
                const newVerification = await Verification.create({
                    payload: phoneNumber,
                    target: 'PHONE'
                }).save()

                // Send message to phone with key
                await sendVerificationSMS(newVerification.payload, newVerification.key)
                console.log(newVerification)
                return { 
                    ok: true,
                    error: null
                }

            } catch (error) {
                return {
                    ok: false,
                    error: error.message
                }
            }

        }
    }
}

export default resolvers 