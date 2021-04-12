// Types
import { Resolvers } from './../../../types/resolvers.d';
import { GetMyProfileResponse } from './../../../types/graph.d';

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver';

const resolvers: Resolvers = {
    Query: {
        GetMyProfile: privateAuthResolver(async (
            _, __, { req }
        ): Promise<GetMyProfileResponse> => {
            
            const { user } = req
            return {
                ok: true,
                error: null,
                user
            }
        })
    }
} 

export default resolvers