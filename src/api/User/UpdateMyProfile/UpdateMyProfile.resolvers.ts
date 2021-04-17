// Types
import { Resolvers } from './../../../types/resolvers.d'
import { 
    MutationUpdateMyProfileArgs,
    UpdateMyProfileResponse
} from './../../../types/graph.d';

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver'
import cleanNullArgs from './../../../utils/cleanNullArgs'

// Entities
import User from './../../../entities/User'

// SQL 
import { SQL } from './../../../init/db/'

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
            const clearArgs = cleanNullArgs(args, true) 
            try {
                
                if(args.password !== null) {
                    user.password = args.password
                    user.save()
                } 

                await SQL(`UPDATE "user" SET ${clearArgs} WHERE id = ${user.id};`)

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