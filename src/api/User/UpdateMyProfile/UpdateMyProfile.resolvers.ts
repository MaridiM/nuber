// Types
import { Resolvers } from './../../../types/resolvers.d'
import { 
    MutationUpdateMyProfileArgs,
    UpdateMyProfileResponse
} from './../../../types/graph.d';

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver'

// Entities
import User from './../../../entities/User';

const resolvers: Resolvers = {
    Mutation: {
        UpdateMyProfile: privateAuthResolver( async (
            _, 
            args: MutationUpdateMyProfileArgs, 
            { req }
        ): Promise<UpdateMyProfileResponse> => {
            // Get user from req
            const user: User = req.user
            
            // Check args by null, 
            // if not null set on notNull {}
            const notNull = {}
            Object.keys(args).forEach(key => {
                if(args[key] !== null) {
                    notNull[key] = args[key]
                } 
            }) 


            try {

                await User.update({ id: user.id }, { ...notNull }) 
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


        })
    }
}

export default resolvers