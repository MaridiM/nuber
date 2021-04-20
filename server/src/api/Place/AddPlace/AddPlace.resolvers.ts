// Types
import { Resolvers } from './../../../types/resolvers.d'
import {
    AddPlaceResponse,
    MutationAddPlaceArgs
} from './../../../types/graph.d';

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver'

// Entities
import User from './../../../entities/User';
import Place from './../../../entities/Place';



const resolvers: Resolvers = {
    Mutation: {
        AddPlace: privateAuthResolver( async (
            _, 
            args: MutationAddPlaceArgs,
            { req }
        ): Promise<AddPlaceResponse> => {
            // Get user from req
            const user: User = req.user

            try {
                
                await Place.create({ ...args, user}).save()

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