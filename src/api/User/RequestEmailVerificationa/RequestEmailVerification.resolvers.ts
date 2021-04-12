// Types
import { Resolvers } from './../../../types/resolvers.d'
import { CompletePhoneVerificationResponse } from './../../../types/graph.d'

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver'
import { sendVerificationEmail } from './../../../utils/sendEmail'

// Entities
import Verification from './../../../entities/Verification'
import User from './../../../entities/User'

const resolvers: Resolvers = {
    Mutation: {
        RequestEmailVerification: privateAuthResolver( async (
            _, __, { req }
        ): Promise<CompletePhoneVerificationResponse> => {
            // Get user from req after context
            const user: User = req.user

            if (user.email && !user.verifiedEmail) {
                // If exist user.email 
                try {
                    // Find old verification 
                    const oldVerification = await Verification.findOne({payload: user.email})
                    
                    // If exist old  verification to remove it 
                    if(oldVerification) {
                        oldVerification.remove()
                    }

                    // After removed old verification, create new verification,
                    // when return created key
                    const newVerification = await Verification.create({
                        payload: user.email,
                        target: 'EMAIL'
                    }).save()

                    // Send email verification
                    await sendVerificationEmail(user.email, user.fullname, newVerification.key)
                    
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
            } else {
                return {
                    ok: false,
                    error: 'Your user has no email to verify'
                }
            }

        })
    }
}

export default resolvers