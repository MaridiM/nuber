// Types
import { ToggleDrivingModeResponse } from './../../../types/graph.d';
import { Resolvers } from "./../../../types/resolvers";

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver';

// Entities
import User from "./../../../entities/User";

const resolvers: Resolvers = {
    Mutation: {
        ToggleDrivingMode: privateAuthResolver( async (
            _, __, { req }
        ): Promise<ToggleDrivingModeResponse> => {

            // Get user from req
            const user: User = req.user

            try {
                // Set user isDriving 
                user.isDriving = !user.isDriving
                await user.save()

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