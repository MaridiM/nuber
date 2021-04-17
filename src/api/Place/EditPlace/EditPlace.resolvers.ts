// Types
import { Resolvers } from './../../../types/resolvers.d'
import {
    MutationEditPlaceArgs,
    EditPlaceResponse
} from './../../../types/graph.d';

// Utils
import privateAuthResolver from './../../../utils/privateAuthResolver'
import cleanNullArgs from './../../../utils/cleanNullArgs'

// Entities
import User from './../../../entities/User'
import Place from './../../../entities/Place'


const resolvers: Resolvers = {
    Mutation: {
        EditPlace: privateAuthResolver( async ( 
            _,
            args: MutationEditPlaceArgs,
            { req }
        ): Promise<EditPlaceResponse> => {
            // Get user, from req
            const user: User = req.user

            try {
                // Find place by args id
                const place  = await Place.findOne({ id: args.id })
                

                if(place) {
                    // If place exist, 
                    // Then check equals placeID === user.id
                    if( place.userId === user.id ) {
                        const notNull =  cleanNullArgs(args)

                        
                        // Update place by place.userId, and update non null values
                        if( typeof(notNull) === 'object') {
                            await Place.update({ id: args.id }, { ...notNull } )
                        }

                        return {
                            ok: true,
                            error: null
                        }
                    } else {
                        //  Return error if user.id !== place.userId
                        return { 
                            ok: false,
                            error: 'Not Authorized'
                        }
                    }

                } else { 
                    // Return error if  place is not exist
                    return {
                        ok: false,
                        error: "Place not found"
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