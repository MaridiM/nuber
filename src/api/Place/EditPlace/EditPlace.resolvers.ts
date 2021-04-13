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
                const place  = await Place.findOne({ id: args.placeID })
                

                if(place) {
                    // If place exist, 
                    // Then check equals placeID === user.id
                    if( place.userID === user.id ) {
                        const notNull = cleanNullArgs(args)

                        // Update place by place.userID, and update non null values
                        await Place.update({ id: args.placeID }, { ...notNull } )

                        return {
                            ok: true,
                            error: null
                        }
                    } else {
                        //  Return error if user.id !== place.userID
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