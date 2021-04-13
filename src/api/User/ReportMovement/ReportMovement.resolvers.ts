// Types
import { Resolvers } from './../../../types/resolvers.d';
import { 
    MutationReportMovementArgs, 
    ReportMovementResponse 

} from './../../../types/graph';

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver';
import cleanNullArgs from './../../..//utils/cleanNullArgs';

// Entities
import User from './../../../entities/User';

const resolvers: Resolvers = {
    Mutation: {
        ReportMovement: privateAuthResolver( async (
            _, 
            args: MutationReportMovementArgs,
            { req }
        ): Promise<ReportMovementResponse> => {

            // Get user, from req
            const user: User = req.user
            const notNull = cleanNullArgs(args)
            
            try {
                // Update location  and orientation  user in profile
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