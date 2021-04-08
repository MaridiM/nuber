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

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  age?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  verifiedEmail: Scalars['Boolean'];
  phoneNumber?: Maybe<Scalars['String']>;
  verifiedPhoneNumber: Scalars['Boolean'];
  profilePhoto?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  idDriving: Scalars['Boolean'];
  idRiding: Scalars['Boolean'];
  isTaken: Scalars['Boolean'];
  lastLng?: Maybe<Scalars['Float']>;
  lastLat?: Maybe<Scalars['Float']>;
  lastOrientation?: Maybe<Scalars['Float']>;
};

export type Verification = {
  __typename?: 'Verification';
  id: Scalars['Int'];
  target: Scalars['String'];
  payload: Scalars['String'];
  key: Scalars['String'];
  used: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};
