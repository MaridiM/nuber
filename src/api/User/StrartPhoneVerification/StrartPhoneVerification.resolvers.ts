// Types
import { Resolvers } from './../../../types/resolvers.d';
import { 
    MutationStartPhoneVerificationArgs,
    StartPhoneVerificationResponse, 
} from './../../../types/graph.d'

// Entities
import Verification from './../../../entities/Verification';

const resolvers: Resolvers = {
    Mutation: {
        StartPhoneVerification: async (_, args: MutationStartPhoneVerificationArgs ): Promise<StartPhoneVerificationResponse> => {
            const { phoneNumber } = args
            try {
                
                const existingVerification = await Verification.findOne({ payload: phoneNumber })
                if(existingVerification) {
                    existingVerification.remove()
                }


            } catch (error) {
                ok: false
                error: error.message
            }

        }
    }
}

export default resolvers 