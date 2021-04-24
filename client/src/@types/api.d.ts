import { gql } from '@apollo/client';
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
  GetMyPlaces: GetMyPlacesResponse;
  RequestRide: RequestRideResponse;
  UpdateRideStatus: UpdateRideStatusResponse;
  CompleteEmailVerification: CompleteEmailVerificationResponse;
  CompletePhoneVerification?: Maybe<CompletePhoneVerificationResponse>;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
  GetNearbyDrivers: GetNearbyDriversResponse;
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
  GetNearbyRide: GetNearbyRideResponse;
  GetRide: GetRideResponse;
  GetMyProfile: GetMyProfileResponse;
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