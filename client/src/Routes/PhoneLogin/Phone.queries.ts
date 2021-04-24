// Core
import { gql } from "graphql.macro"

export const MUTATION_PHONE_SIGN_IN = gql `
    mutation startPhoneVerification ( $phoneNumber: String! ) {
        StartPhoneVerification( phoneNumber: $phoneNumber  ) {
            ok
            error
        }
    }
`