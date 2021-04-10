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

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['Int'];
  messages: Array<Maybe<Message>>;
  participants: Array<Maybe<User>>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type CompletePhoneVerificationResponse = {
  __typename?: 'CompletePhoneVerificationResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type EmailSignInResponse = {
  __typename?: 'EmailSignInResponse';
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

export type Message = {
  __typename?: 'Message';
  id: Scalars['Int'];
  text: Scalars['String'];
  chat: Message;
  user: User;
  createdAt: Scalars['String'];
  updateAt?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CompletePhoneVerification?: Maybe<CompletePhoneVerificationResponse>;
  EmailSignIn: EmailSignInResponse;
  FacebookConnect: FacebookConnectResponse;
  StartPhoneVerification: StartPhoneVerificationResponse;
};


export type MutationCompletePhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
  key: Scalars['String'];
};


export type MutationEmailSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationFacebookConnectArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  facebookID: Scalars['String'];
};


export type MutationStartPhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['Int'];
  name: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  address: Scalars['String'];
  isFav: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
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

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  verifiedEmail: Scalars['Boolean'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  verifiedPhoneNumber: Scalars['Boolean'];
  facebookID: Scalars['String'];
  profilePhoto?: Maybe<Scalars['String']>;
  idDriving: Scalars['Boolean'];
  idRiding: Scalars['Boolean'];
  isTaken: Scalars['Boolean'];
  lastLng?: Maybe<Scalars['Float']>;
  lastLat?: Maybe<Scalars['Float']>;
  lastOrientation?: Maybe<Scalars['Float']>;
  chat?: Maybe<Chat>;
  messages?: Maybe<Array<Maybe<Message>>>;
  ridesAsPassenger: Array<Maybe<Ride>>;
  ridesAsDriver: Array<Maybe<Ride>>;
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
