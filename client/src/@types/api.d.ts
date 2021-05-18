import { gql } from 'graphql.macro';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};




export type AddPlaceResponse = {
  __typename?: 'AddPlaceResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['Int'];
  messages?: Maybe<Array<Maybe<Message>>>;
  passenger: User;
  passengerId: Scalars['Int'];
  driver: User;
  driverId?: Maybe<Scalars['Int']>;
  ride?: Maybe<Ride>;
  rideId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type CompleteEmailVerificationResponse = {
  __typename?: 'CompleteEmailVerificationResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type CompletePhoneVerificationResponse = {
  __typename?: 'CompletePhoneVerificationResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type DeletePlaceResponse = {
  __typename?: 'DeletePlaceResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type EditPlaceResponse = {
  __typename?: 'EditPlaceResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type EmailSignInResponse = {
  __typename?: 'EmailSignInResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type EmailSignUpResponse = {
  __typename?: 'EmailSignUpResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type FacebookConnectResponse = {
  __typename?: 'FacebookConnectResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type GetChatResponse = {
  __typename?: 'GetChatResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  chat?: Maybe<Chat>;
};

export type GetMyPlacesResponse = {
  __typename?: 'GetMyPlacesResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  places?: Maybe<Array<Maybe<Place>>>;
};

export type GetMyProfileResponse = {
  __typename?: 'GetMyProfileResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type GetNearbyDriversResponse = {
  __typename?: 'GetNearbyDriversResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  drivers?: Maybe<Array<Maybe<User>>>;
};

export type GetNearbyRideResponse = {
  __typename?: 'GetNearbyRideResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  ride?: Maybe<Ride>;
};

export type GetRideResponse = {
  __typename?: 'GetRideResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  ride?: Maybe<Ride>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['Int'];
  text: Scalars['String'];
  chat: Chat;
  chatId?: Maybe<Scalars['Int']>;
  user: User;
  createdAt: Scalars['String'];
  updateAt?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  SendChatMessage: SendChatMessageResponse;
  AddPlace: AddPlaceResponse;
  DeletePlace: DeletePlaceResponse;
  EditPlace: EditPlaceResponse;
  RequestRide: RequestRideResponse;
  UpdateRideStatus: UpdateRideStatusResponse;
  CompleteEmailVerification: CompleteEmailVerificationResponse;
  CompletePhoneVerification?: Maybe<CompletePhoneVerificationResponse>;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
  ReportMovement: ReportMovementResponse;
  RequestEmailVerification: RequestEmailVerificationResponse;
  StartPhoneVerification: StartPhoneVerificationResponse;
  ToggleDrivingMode: ToggleDrivingModeResponse;
  UpdateMyProfile?: Maybe<UpdateMyProfileResponse>;
};


export type MutationSendChatMessageArgs = {
  text: Scalars['String'];
  chatId: Scalars['Int'];
};


export type MutationAddPlaceArgs = {
  name: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  address: Scalars['String'];
  isFav: Scalars['Boolean'];
};


export type MutationDeletePlaceArgs = {
  placeID: Scalars['Int'];
};


export type MutationEditPlaceArgs = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  isFav?: Maybe<Scalars['Boolean']>;
};


export type MutationRequestRideArgs = {
  pickUpAddress: Scalars['String'];
  pickUpLat: Scalars['Float'];
  pickUpLng: Scalars['Float'];
  dropOffAddress: Scalars['String'];
  dropOffLat: Scalars['Float'];
  dropOffLng: Scalars['Float'];
  price: Scalars['Float'];
  distance: Scalars['String'];
  duration: Scalars['String'];
};


export type MutationUpdateRideStatusArgs = {
  rideId: Scalars['Int'];
  status: StatusOptions;
};


export type MutationCompleteEmailVerificationArgs = {
  key: Scalars['String'];
};


export type MutationCompletePhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
  key: Scalars['String'];
};


export type MutationEmailSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationEmailSignUpArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  profilePhoto: Scalars['String'];
  phoneNumber: Scalars['String'];
  age: Scalars['Int'];
};


export type MutationFacebookConnectArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  facebookID: Scalars['String'];
};


export type MutationReportMovementArgs = {
  lastOrientation?: Maybe<Scalars['Float']>;
  lastLat?: Maybe<Scalars['Float']>;
  lastLng?: Maybe<Scalars['Float']>;
};


export type MutationStartPhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationUpdateMyProfileArgs = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  profilePhoto?: Maybe<Scalars['String']>;
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['Int'];
  name: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  address: Scalars['String'];
  isFav: Scalars['Boolean'];
  userId: Scalars['Int'];
  user: User;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  GetChat: GetChatResponse;
  GetMyPlaces: GetMyPlacesResponse;
  GetNearbyRide: GetNearbyRideResponse;
  GetRide: GetRideResponse;
  GetMyProfile: GetMyProfileResponse;
  GetNearbyDrivers: GetNearbyDriversResponse;
};


export type QueryGetChatArgs = {
  chatId: Scalars['Int'];
};


export type QueryGetRideArgs = {
  rideId: Scalars['Int'];
};

export type ReportMovementResponse = {
  __typename?: 'ReportMovementResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type RequestEmailVerificationResponse = {
  __typename?: 'RequestEmailVerificationResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type RequestRideResponse = {
  __typename?: 'RequestRideResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  ride?: Maybe<Ride>;
};

export type Ride = {
  __typename?: 'Ride';
  id: Scalars['Int'];
  status: Scalars['String'];
  pickUpAddress: Scalars['String'];
  pickUpLat: Scalars['Float'];
  pickUpLng: Scalars['Float'];
  dropOffAddress: Scalars['String'];
  dropOffLat: Scalars['Float'];
  dropOffLng: Scalars['Float'];
  price: Scalars['Float'];
  distance: Scalars['String'];
  duration: Scalars['String'];
  driver: User;
  driverId?: Maybe<Scalars['Int']>;
  passenger: User;
  passengerId: Scalars['Int'];
  chat?: Maybe<Chat>;
  chatId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type SendChatMessageResponse = {
  __typename?: 'SendChatMessageResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  message?: Maybe<Message>;
};

export type StartPhoneVerificationResponse = {
  __typename?: 'StartPhoneVerificationResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export enum StatusOptions {
  Accepted = 'ACCEPTED',
  Finished = 'FINISHED',
  Canceled = 'CANCELED',
  Requesting = 'REQUESTING',
  Onroute = 'ONROUTE'
}

export type Subscription = {
  __typename?: 'Subscription';
  MessageSubscription?: Maybe<Message>;
  NearbyRideDescription?: Maybe<Ride>;
  RideStatusSubscription?: Maybe<Ride>;
  DriversSubscription?: Maybe<User>;
};

export type ToggleDrivingModeResponse = {
  __typename?: 'ToggleDrivingModeResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type UpdateMyProfileResponse = {
  __typename?: 'UpdateMyProfileResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type UpdateRideStatusResponse = {
  __typename?: 'UpdateRideStatusResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  verifiedEmail: Scalars['Boolean'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  age?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  verifiedPhoneNumber: Scalars['Boolean'];
  profilePhoto?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  isDriving: Scalars['Boolean'];
  isRiding: Scalars['Boolean'];
  isTaken: Scalars['Boolean'];
  lastLng?: Maybe<Scalars['Float']>;
  lastLat?: Maybe<Scalars['Float']>;
  lastOrientation?: Maybe<Scalars['Float']>;
  facebookID?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<Message>>>;
  ridesAsPassenger?: Maybe<Array<Maybe<Ride>>>;
  ridesAsDriver?: Maybe<Array<Maybe<Ride>>>;
  chatAsPassenger?: Maybe<Array<Maybe<Chat>>>;
  chatAsDriver?: Maybe<Array<Maybe<Chat>>>;
  places?: Maybe<Array<Maybe<Place>>>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type Verification = {
  __typename?: 'Verification';
  id: Scalars['Int'];
  target: Scalars['String'];
  payload: Scalars['String'];
  key: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type GetMyPlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyPlacesQuery = (
  { __typename?: 'Query' }
  & { GetMyPlaces: (
    { __typename?: 'GetMyPlacesResponse' }
    & Pick<GetMyPlacesResponse, 'ok' | 'error'>
    & { places?: Maybe<Array<Maybe<(
      { __typename?: 'Place' }
      & Pick<Place, 'id' | 'name' | 'address' | 'isFav'>
    )>>> }
  ) }
);

export type GetMyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyProfileQuery = (
  { __typename?: 'Query' }
  & { GetMyProfile: (
    { __typename?: 'GetMyProfileResponse' }
    & Pick<GetMyProfileResponse, 'ok' | 'error'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'profilePhoto' | 'firstName' | 'lastName' | 'email' | 'fullName' | 'isDriving'>
    )> }
  ) }
);

export type ToggleDrivingMutationVariables = Exact<{ [key: string]: never; }>;


export type ToggleDrivingMutation = (
  { __typename?: 'Mutation' }
  & { ToggleDrivingMode: (
    { __typename?: 'ToggleDrivingModeResponse' }
    & Pick<ToggleDrivingModeResponse, 'ok' | 'error'>
  ) }
);

export type EditPlaceMutationVariables = Exact<{
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  isFav?: Maybe<Scalars['Boolean']>;
}>;


export type EditPlaceMutation = (
  { __typename?: 'Mutation' }
  & { EditPlace: (
    { __typename?: 'EditPlaceResponse' }
    & Pick<EditPlaceResponse, 'ok' | 'error'>
  ) }
);

export type AddPlaceMutationVariables = Exact<{
  name: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  address: Scalars['String'];
  isFav: Scalars['Boolean'];
}>;


export type AddPlaceMutation = (
  { __typename?: 'Mutation' }
  & { AddPlace: (
    { __typename?: 'AddPlaceResponse' }
    & Pick<AddPlaceResponse, 'ok' | 'error'>
  ) }
);

export type UpdateMyProfileMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  profilePhoto?: Maybe<Scalars['String']>;
}>;


export type UpdateMyProfileMutation = (
  { __typename?: 'Mutation' }
  & { UpdateMyProfile?: Maybe<(
    { __typename?: 'UpdateMyProfileResponse' }
    & Pick<UpdateMyProfileResponse, 'ok' | 'error'>
  )> }
);

export type EmailSignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type EmailSignInMutation = (
  { __typename?: 'Mutation' }
  & { EmailSignIn: (
    { __typename?: 'EmailSignInResponse' }
    & Pick<EmailSignInResponse, 'ok' | 'error' | 'token'>
  ) }
);

export type ReportMovementMutationVariables = Exact<{
  lastOrientation?: Maybe<Scalars['Float']>;
  lastLat?: Maybe<Scalars['Float']>;
  lastLng?: Maybe<Scalars['Float']>;
}>;


export type ReportMovementMutation = (
  { __typename?: 'Mutation' }
  & { ReportMovement: (
    { __typename?: 'ReportMovementResponse' }
    & Pick<ReportMovementResponse, 'ok' | 'error'>
  ) }
);

export type GetNearbyDriversQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNearbyDriversQuery = (
  { __typename?: 'Query' }
  & { GetNearbyDrivers: (
    { __typename?: 'GetNearbyDriversResponse' }
    & Pick<GetNearbyDriversResponse, 'ok' | 'error'>
    & { drivers?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'lastLng' | 'lastLat'>
    )>>> }
  ) }
);

export type StartPhoneVerificationMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;


export type StartPhoneVerificationMutation = (
  { __typename?: 'Mutation' }
  & { StartPhoneVerification: (
    { __typename?: 'StartPhoneVerificationResponse' }
    & Pick<StartPhoneVerificationResponse, 'ok' | 'error'>
  ) }
);

export type EmailSignUpMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  profilePhoto: Scalars['String'];
  phoneNumber: Scalars['String'];
  age: Scalars['Int'];
}>;


export type EmailSignUpMutation = (
  { __typename?: 'Mutation' }
  & { EmailSignUp: (
    { __typename?: 'EmailSignUpResponse' }
    & Pick<EmailSignUpResponse, 'ok' | 'error' | 'token'>
  ) }
);

export type FacebookConnectMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  facebookID: Scalars['String'];
}>;


export type FacebookConnectMutation = (
  { __typename?: 'Mutation' }
  & { FacebookConnect: (
    { __typename?: 'FacebookConnectResponse' }
    & Pick<FacebookConnectResponse, 'ok' | 'error' | 'token'>
  ) }
);

export type CompletePhoneVerificationMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
  key: Scalars['String'];
}>;


export type CompletePhoneVerificationMutation = (
  { __typename?: 'Mutation' }
  & { CompletePhoneVerification?: Maybe<(
    { __typename?: 'CompletePhoneVerificationResponse' }
    & Pick<CompletePhoneVerificationResponse, 'token' | 'ok' | 'error'>
  )> }
);


export const GetMyPlacesDocument = gql`
    query getMyPlaces {
  GetMyPlaces {
    ok
    error
    places {
      id
      name
      address
      isFav
    }
  }
}
    `;

/**
 * __useGetMyPlacesQuery__
 *
 * To run a query within a React component, call `useGetMyPlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyPlacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyPlacesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyPlacesQuery(baseOptions?: Apollo.QueryHookOptions<GetMyPlacesQuery, GetMyPlacesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyPlacesQuery, GetMyPlacesQueryVariables>(GetMyPlacesDocument, options);
      }
export function useGetMyPlacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyPlacesQuery, GetMyPlacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyPlacesQuery, GetMyPlacesQueryVariables>(GetMyPlacesDocument, options);
        }
export type GetMyPlacesQueryHookResult = ReturnType<typeof useGetMyPlacesQuery>;
export type GetMyPlacesLazyQueryHookResult = ReturnType<typeof useGetMyPlacesLazyQuery>;
export type GetMyPlacesQueryResult = Apollo.QueryResult<GetMyPlacesQuery, GetMyPlacesQueryVariables>;
export const GetMyProfileDocument = gql`
    query getMyProfile {
  GetMyProfile {
    ok
    error
    user {
      id
      profilePhoto
      firstName
      lastName
      email
      fullName
      isDriving
    }
  }
}
    `;

/**
 * __useGetMyProfileQuery__
 *
 * To run a query within a React component, call `useGetMyProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetMyProfileQuery, GetMyProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyProfileQuery, GetMyProfileQueryVariables>(GetMyProfileDocument, options);
      }
export function useGetMyProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyProfileQuery, GetMyProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyProfileQuery, GetMyProfileQueryVariables>(GetMyProfileDocument, options);
        }
export type GetMyProfileQueryHookResult = ReturnType<typeof useGetMyProfileQuery>;
export type GetMyProfileLazyQueryHookResult = ReturnType<typeof useGetMyProfileLazyQuery>;
export type GetMyProfileQueryResult = Apollo.QueryResult<GetMyProfileQuery, GetMyProfileQueryVariables>;
export const ToggleDrivingDocument = gql`
    mutation toggleDriving {
  ToggleDrivingMode {
    ok
    error
  }
}
    `;
export type ToggleDrivingMutationFn = Apollo.MutationFunction<ToggleDrivingMutation, ToggleDrivingMutationVariables>;

/**
 * __useToggleDrivingMutation__
 *
 * To run a mutation, you first call `useToggleDrivingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleDrivingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleDrivingMutation, { data, loading, error }] = useToggleDrivingMutation({
 *   variables: {
 *   },
 * });
 */
export function useToggleDrivingMutation(baseOptions?: Apollo.MutationHookOptions<ToggleDrivingMutation, ToggleDrivingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleDrivingMutation, ToggleDrivingMutationVariables>(ToggleDrivingDocument, options);
      }
export type ToggleDrivingMutationHookResult = ReturnType<typeof useToggleDrivingMutation>;
export type ToggleDrivingMutationResult = Apollo.MutationResult<ToggleDrivingMutation>;
export type ToggleDrivingMutationOptions = Apollo.BaseMutationOptions<ToggleDrivingMutation, ToggleDrivingMutationVariables>;
export const EditPlaceDocument = gql`
    mutation editPlace($id: Int!, $name: String, $isFav: Boolean) {
  EditPlace(id: $id, name: $name, isFav: $isFav) {
    ok
    error
  }
}
    `;
export type EditPlaceMutationFn = Apollo.MutationFunction<EditPlaceMutation, EditPlaceMutationVariables>;

/**
 * __useEditPlaceMutation__
 *
 * To run a mutation, you first call `useEditPlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPlaceMutation, { data, loading, error }] = useEditPlaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      isFav: // value for 'isFav'
 *   },
 * });
 */
export function useEditPlaceMutation(baseOptions?: Apollo.MutationHookOptions<EditPlaceMutation, EditPlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPlaceMutation, EditPlaceMutationVariables>(EditPlaceDocument, options);
      }
export type EditPlaceMutationHookResult = ReturnType<typeof useEditPlaceMutation>;
export type EditPlaceMutationResult = Apollo.MutationResult<EditPlaceMutation>;
export type EditPlaceMutationOptions = Apollo.BaseMutationOptions<EditPlaceMutation, EditPlaceMutationVariables>;
export const AddPlaceDocument = gql`
    mutation addPlace($name: String!, $lat: Float!, $lng: Float!, $address: String!, $isFav: Boolean!) {
  AddPlace(name: $name, lat: $lat, lng: $lng, address: $address, isFav: $isFav) {
    ok
    error
  }
}
    `;
export type AddPlaceMutationFn = Apollo.MutationFunction<AddPlaceMutation, AddPlaceMutationVariables>;

/**
 * __useAddPlaceMutation__
 *
 * To run a mutation, you first call `useAddPlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPlaceMutation, { data, loading, error }] = useAddPlaceMutation({
 *   variables: {
 *      name: // value for 'name'
 *      lat: // value for 'lat'
 *      lng: // value for 'lng'
 *      address: // value for 'address'
 *      isFav: // value for 'isFav'
 *   },
 * });
 */
export function useAddPlaceMutation(baseOptions?: Apollo.MutationHookOptions<AddPlaceMutation, AddPlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPlaceMutation, AddPlaceMutationVariables>(AddPlaceDocument, options);
      }
export type AddPlaceMutationHookResult = ReturnType<typeof useAddPlaceMutation>;
export type AddPlaceMutationResult = Apollo.MutationResult<AddPlaceMutation>;
export type AddPlaceMutationOptions = Apollo.BaseMutationOptions<AddPlaceMutation, AddPlaceMutationVariables>;
export const UpdateMyProfileDocument = gql`
    mutation updateMyProfile($email: String, $firstName: String, $lastName: String, $profilePhoto: String) {
  UpdateMyProfile(
    email: $email
    firstName: $firstName
    lastName: $lastName
    profilePhoto: $profilePhoto
  ) {
    ok
    error
  }
}
    `;
export type UpdateMyProfileMutationFn = Apollo.MutationFunction<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;

/**
 * __useUpdateMyProfileMutation__
 *
 * To run a mutation, you first call `useUpdateMyProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyProfileMutation, { data, loading, error }] = useUpdateMyProfileMutation({
 *   variables: {
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      profilePhoto: // value for 'profilePhoto'
 *   },
 * });
 */
export function useUpdateMyProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>(UpdateMyProfileDocument, options);
      }
export type UpdateMyProfileMutationHookResult = ReturnType<typeof useUpdateMyProfileMutation>;
export type UpdateMyProfileMutationResult = Apollo.MutationResult<UpdateMyProfileMutation>;
export type UpdateMyProfileMutationOptions = Apollo.BaseMutationOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;
export const EmailSignInDocument = gql`
    mutation emailSignIn($email: String!, $password: String!) {
  EmailSignIn(email: $email, password: $password) {
    ok
    error
    token
  }
}
    `;
export type EmailSignInMutationFn = Apollo.MutationFunction<EmailSignInMutation, EmailSignInMutationVariables>;

/**
 * __useEmailSignInMutation__
 *
 * To run a mutation, you first call `useEmailSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmailSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [emailSignInMutation, { data, loading, error }] = useEmailSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useEmailSignInMutation(baseOptions?: Apollo.MutationHookOptions<EmailSignInMutation, EmailSignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EmailSignInMutation, EmailSignInMutationVariables>(EmailSignInDocument, options);
      }
export type EmailSignInMutationHookResult = ReturnType<typeof useEmailSignInMutation>;
export type EmailSignInMutationResult = Apollo.MutationResult<EmailSignInMutation>;
export type EmailSignInMutationOptions = Apollo.BaseMutationOptions<EmailSignInMutation, EmailSignInMutationVariables>;
export const ReportMovementDocument = gql`
    mutation reportMovement($lastOrientation: Float, $lastLat: Float, $lastLng: Float) {
  ReportMovement(
    lastOrientation: $lastOrientation
    lastLat: $lastLat
    lastLng: $lastLng
  ) {
    ok
    error
  }
}
    `;
export type ReportMovementMutationFn = Apollo.MutationFunction<ReportMovementMutation, ReportMovementMutationVariables>;

/**
 * __useReportMovementMutation__
 *
 * To run a mutation, you first call `useReportMovementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportMovementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportMovementMutation, { data, loading, error }] = useReportMovementMutation({
 *   variables: {
 *      lastOrientation: // value for 'lastOrientation'
 *      lastLat: // value for 'lastLat'
 *      lastLng: // value for 'lastLng'
 *   },
 * });
 */
export function useReportMovementMutation(baseOptions?: Apollo.MutationHookOptions<ReportMovementMutation, ReportMovementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReportMovementMutation, ReportMovementMutationVariables>(ReportMovementDocument, options);
      }
export type ReportMovementMutationHookResult = ReturnType<typeof useReportMovementMutation>;
export type ReportMovementMutationResult = Apollo.MutationResult<ReportMovementMutation>;
export type ReportMovementMutationOptions = Apollo.BaseMutationOptions<ReportMovementMutation, ReportMovementMutationVariables>;
export const GetNearbyDriversDocument = gql`
    query getNearbyDrivers {
  GetNearbyDrivers {
    ok
    error
    drivers {
      id
      lastLng
      lastLat
    }
  }
}
    `;

/**
 * __useGetNearbyDriversQuery__
 *
 * To run a query within a React component, call `useGetNearbyDriversQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNearbyDriversQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNearbyDriversQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNearbyDriversQuery(baseOptions?: Apollo.QueryHookOptions<GetNearbyDriversQuery, GetNearbyDriversQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNearbyDriversQuery, GetNearbyDriversQueryVariables>(GetNearbyDriversDocument, options);
      }
export function useGetNearbyDriversLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNearbyDriversQuery, GetNearbyDriversQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNearbyDriversQuery, GetNearbyDriversQueryVariables>(GetNearbyDriversDocument, options);
        }
export type GetNearbyDriversQueryHookResult = ReturnType<typeof useGetNearbyDriversQuery>;
export type GetNearbyDriversLazyQueryHookResult = ReturnType<typeof useGetNearbyDriversLazyQuery>;
export type GetNearbyDriversQueryResult = Apollo.QueryResult<GetNearbyDriversQuery, GetNearbyDriversQueryVariables>;
export const StartPhoneVerificationDocument = gql`
    mutation startPhoneVerification($phoneNumber: String!) {
  StartPhoneVerification(phoneNumber: $phoneNumber) {
    ok
    error
  }
}
    `;
export type StartPhoneVerificationMutationFn = Apollo.MutationFunction<StartPhoneVerificationMutation, StartPhoneVerificationMutationVariables>;

/**
 * __useStartPhoneVerificationMutation__
 *
 * To run a mutation, you first call `useStartPhoneVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartPhoneVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startPhoneVerificationMutation, { data, loading, error }] = useStartPhoneVerificationMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useStartPhoneVerificationMutation(baseOptions?: Apollo.MutationHookOptions<StartPhoneVerificationMutation, StartPhoneVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StartPhoneVerificationMutation, StartPhoneVerificationMutationVariables>(StartPhoneVerificationDocument, options);
      }
export type StartPhoneVerificationMutationHookResult = ReturnType<typeof useStartPhoneVerificationMutation>;
export type StartPhoneVerificationMutationResult = Apollo.MutationResult<StartPhoneVerificationMutation>;
export type StartPhoneVerificationMutationOptions = Apollo.BaseMutationOptions<StartPhoneVerificationMutation, StartPhoneVerificationMutationVariables>;
export const EmailSignUpDocument = gql`
    mutation emailSignUp($firstName: String!, $lastName: String!, $email: String!, $password: String!, $profilePhoto: String!, $phoneNumber: String!, $age: Int!) {
  EmailSignUp(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
    profilePhoto: $profilePhoto
    phoneNumber: $phoneNumber
    age: $age
  ) {
    ok
    error
    token
  }
}
    `;
export type EmailSignUpMutationFn = Apollo.MutationFunction<EmailSignUpMutation, EmailSignUpMutationVariables>;

/**
 * __useEmailSignUpMutation__
 *
 * To run a mutation, you first call `useEmailSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmailSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [emailSignUpMutation, { data, loading, error }] = useEmailSignUpMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      profilePhoto: // value for 'profilePhoto'
 *      phoneNumber: // value for 'phoneNumber'
 *      age: // value for 'age'
 *   },
 * });
 */
export function useEmailSignUpMutation(baseOptions?: Apollo.MutationHookOptions<EmailSignUpMutation, EmailSignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EmailSignUpMutation, EmailSignUpMutationVariables>(EmailSignUpDocument, options);
      }
export type EmailSignUpMutationHookResult = ReturnType<typeof useEmailSignUpMutation>;
export type EmailSignUpMutationResult = Apollo.MutationResult<EmailSignUpMutation>;
export type EmailSignUpMutationOptions = Apollo.BaseMutationOptions<EmailSignUpMutation, EmailSignUpMutationVariables>;
export const FacebookConnectDocument = gql`
    mutation facebookConnect($firstName: String!, $lastName: String!, $email: String!, $facebookID: String!) {
  FacebookConnect(
    firstName: $firstName
    lastName: $lastName
    email: $email
    facebookID: $facebookID
  ) {
    ok
    error
    token
  }
}
    `;
export type FacebookConnectMutationFn = Apollo.MutationFunction<FacebookConnectMutation, FacebookConnectMutationVariables>;

/**
 * __useFacebookConnectMutation__
 *
 * To run a mutation, you first call `useFacebookConnectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFacebookConnectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [facebookConnectMutation, { data, loading, error }] = useFacebookConnectMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      facebookID: // value for 'facebookID'
 *   },
 * });
 */
export function useFacebookConnectMutation(baseOptions?: Apollo.MutationHookOptions<FacebookConnectMutation, FacebookConnectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FacebookConnectMutation, FacebookConnectMutationVariables>(FacebookConnectDocument, options);
      }
export type FacebookConnectMutationHookResult = ReturnType<typeof useFacebookConnectMutation>;
export type FacebookConnectMutationResult = Apollo.MutationResult<FacebookConnectMutation>;
export type FacebookConnectMutationOptions = Apollo.BaseMutationOptions<FacebookConnectMutation, FacebookConnectMutationVariables>;
export const CompletePhoneVerificationDocument = gql`
    mutation completePhoneVerification($phoneNumber: String!, $key: String!) {
  CompletePhoneVerification(phoneNumber: $phoneNumber, key: $key) {
    token
    ok
    error
  }
}
    `;
export type CompletePhoneVerificationMutationFn = Apollo.MutationFunction<CompletePhoneVerificationMutation, CompletePhoneVerificationMutationVariables>;

/**
 * __useCompletePhoneVerificationMutation__
 *
 * To run a mutation, you first call `useCompletePhoneVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompletePhoneVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completePhoneVerificationMutation, { data, loading, error }] = useCompletePhoneVerificationMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useCompletePhoneVerificationMutation(baseOptions?: Apollo.MutationHookOptions<CompletePhoneVerificationMutation, CompletePhoneVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompletePhoneVerificationMutation, CompletePhoneVerificationMutationVariables>(CompletePhoneVerificationDocument, options);
      }
export type CompletePhoneVerificationMutationHookResult = ReturnType<typeof useCompletePhoneVerificationMutation>;
export type CompletePhoneVerificationMutationResult = Apollo.MutationResult<CompletePhoneVerificationMutation>;
export type CompletePhoneVerificationMutationOptions = Apollo.BaseMutationOptions<CompletePhoneVerificationMutation, CompletePhoneVerificationMutationVariables>;