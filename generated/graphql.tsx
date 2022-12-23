import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Error = {
  __typename?: 'Error';
  description: Scalars['String'];
  title: Scalars['String'];
};

export type LoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: PostEntity;
  login: UserOrError;
  logout: Scalars['Boolean'];
  register?: Maybe<UserEntity>;
  savePost: Scalars['Boolean'];
  unsavePost: Scalars['Boolean'];
};


export type MutationCreatePostArgs = {
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationLoginArgs = {
  options: LoginUserArgs;
};


export type MutationRegisterArgs = {
  options: RegisterUserArgs;
};


export type MutationSavePostArgs = {
  postId: Scalars['String'];
};


export type MutationUnsavePostArgs = {
  postId: Scalars['String'];
  userId: Scalars['String'];
};

export type PostEntity = {
  __typename?: 'PostEntity';
  description: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
  user: UserEntity;
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  callMe?: Maybe<UserEntity>;
  getUser?: Maybe<UserEntity>;
  post: PostEntity;
  posts: Array<PostEntity>;
  savedPosts: Array<PostEntity>;
};


export type QueryGetUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export type RegisterUserArgs = {
  email: Scalars['String'];
  image: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserEntity = {
  __typename?: 'UserEntity';
  email: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserOrError = {
  __typename?: 'UserOrError';
  data?: Maybe<UserEntity>;
  error?: Maybe<Error>;
};

export type RegisterMutationVariables = Exact<{
  options: RegisterUserArgs;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'UserEntity', id: string, username: string, email: string, image: string } | null };

export type GetUserQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'UserEntity', id: string, username: string, email: string, image: string } | null };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'PostEntity', id: string, title: string, description: string, userId: string, user: { __typename?: 'UserEntity', username: string, email: string, image: string, id: string } }> };

export type SavedPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type SavedPostsQuery = { __typename?: 'Query', savedPosts: Array<{ __typename?: 'PostEntity', id: string, title: string, description: string, user: { __typename?: 'UserEntity', id: string, username: string, image: string } }> };


export const RegisterDocument = gql`
    mutation Register($options: RegisterUserArgs!) {
  register(options: $options) {
    id
    username
    email
    image
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GetUserDocument = gql`
    query GetUser($email: String, $id: String, $username: String) {
  getUser(email: $email, id: $id, username: $username) {
    id
    username
    email
    image
  }
}
    `;

export function useGetUserQuery(options?: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserQuery, GetUserQueryVariables>({ query: GetUserDocument, ...options });
};
export const PostsDocument = gql`
    query Posts {
  posts {
    id
    title
    description
    userId
    user {
      username
      email
      image
      id
    }
  }
}
    `;

export function usePostsQuery(options?: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'>) {
  return Urql.useQuery<PostsQuery, PostsQueryVariables>({ query: PostsDocument, ...options });
};
export const SavedPostsDocument = gql`
    query SavedPosts {
  savedPosts {
    id
    title
    description
    user {
      id
      username
      image
    }
  }
}
    `;

export function useSavedPostsQuery(options?: Omit<Urql.UseQueryArgs<SavedPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<SavedPostsQuery, SavedPostsQueryVariables>({ query: SavedPostsDocument, ...options });
};