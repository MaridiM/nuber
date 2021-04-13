// Types
import { Resolvers } from './../../../types/resolvers.d';
import { GetMyPlacesResponse } from './../../../types/graph.d'

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver';

// Entities
import User from './../../../entities/User';


const resolvers: Resolvers = {
    Mutation: {
        GetMyPlaces: privateAuthResolver( 
            async (_, __, { req }): Promise<GetMyPlacesResponse> => {
                try {
                    const user = await User.findOne(
                        { id: req.user.id },
                        { relations: ['places']}
                    )
                    
                    if( user ) {
                        return {
                            ok: true,  
                            places:  user.places,
                            error: null,
                        }
                    } else {
                        return {
                            ok: false, 
                            error: 'User not found',
                            places: null
                        }
                    }

                } catch (error) {
                    return {
                        ok: false,
                        error: error.message,
                        places: null
                    }
                }
            }
        )
    }
}

export default resolvers