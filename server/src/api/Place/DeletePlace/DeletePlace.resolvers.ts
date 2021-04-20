// Types
import { Resolvers } from './../../../types/resolvers.d'
import { MutationDeletePlaceArgs, DeletePlaceResponse} from './../../../types/graph.d'

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver';

// Entities
import User from './../../../entities/User';
import Place from './../../../entities/Place';


const resolvers: Resolvers = {
    Mutation: {
        DeletePlace: privateAuthResolver( async ( 
            _, 
            args: MutationDeletePlaceArgs, 
            { req } 
        ): Promise<DeletePlaceResponse> => {
            
            // Get user from req
            const user: User = req.user

            try {
                // Find one place by id
                const place = await Place.findOne({ id: args.placeID })

                if( place ) {
                    // Compare place place.userId === user.id
                    // if true, remove place
                    // else return error
                    if(place.userId === user.id) {
                        place.remove()

                        return { 
                            ok: true,
                            error: null
                        }
                    } else {
                        return {
                            ok: false,
                            error: 'Not Authorized'
                        }
                    }

                } else {
                    // if place is not exist, return error
                    return {
                        ok: false,
                        error: 'Place not found'
                    }
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