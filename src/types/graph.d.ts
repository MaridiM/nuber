export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  messages: Array<Maybe<Message>>;
  participants: Array<Maybe<User>>;
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

export type Message = {
  __typename?: 'Message';
  id: Scalars['Int'];
  text: Scalars['String'];
  chat: Chat;
  user: User;
  createdAt: Scalars['String'];
  updateAt?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddPlace: AddPlaceResponse;
  CompleteEmailVerification: CompleteEmailVerificationResponse;
  CompletePhoneVerification?: Maybe<CompletePhoneVerificationResponse>;
  DeletePlace: DeletePlaceResponse;
  EditPlace: EditPlaceResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
  GetMyPlaces: GetMyPlacesResponse;
  GetNearbyDrivers: GetNearbyDriversResponse;
  ReportMovement: ReportMovementResponse;
  RequestEmailVerification: RequestEmailVerificationResponse;
  StartPhoneVerification: StartPhoneVerificationResponse;
  ToggleDrivingMode: ToggleDrivingModeResponse;
  UpdateMyProfile?: Maybe<UpdateMyProfileResponse>;
};


export type MutationAddPlaceArgs = {
  name: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  address: Scalars['String'];
  isFav: Scalars['Boolean'];
};


export type MutationCompleteEmailVerificationArgs = {
  key: Scalars['String'];
};


export type MutationCompletePhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
  key: Scalars['String'];
};


export type MutationDeletePlaceArgs = {
  placeID: Scalars['Int'];
};


export type MutationEditPlaceArgs = {
  placeID: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  isFav?: Maybe<Scalars['Boolean']>;
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
  userID: Scalars['Int'];
  user: User;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  GetMyProfile: GetMyProfileResponse;
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

export type Ride = {
  __typename?: 'Ride';
  id: Scalars['Int'];
  status: Scalars['String'];
  pickUpAddress: Scalars['String'];
  picUpLat: Scalars['Float'];
  picUpLng: Scalars['Float'];
  dropOffAddress: Scalars['String'];
  dropOffLat: Scalars['Float'];
  dropOffLng: Scalars['Float'];
  price: Scalars['Float'];
  distance: Scalars['String'];
  duration: Scalars['String'];
  driver: User;
  passenger: User;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type StartPhoneVerificationResponse = {
  __typename?: 'StartPhoneVerificationResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
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
