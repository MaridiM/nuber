// Types
import { Resolvers } from "./../../../types/resolvers";
import { ToggleDrivingModeResponse } from './../../../types/graph.d';

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
                console.log(user)
                // Set user isDriving 
                user.isDriving = !user.isDriving
                console.log(user)
                user.save()

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