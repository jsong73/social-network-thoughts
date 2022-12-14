import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user{
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token 
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_THOUGHT = gql`
    mutation addThought($thoughtText: String!) {
         addThought(thoughtText: $thoughtText) {
             _id
            thoughtText
            username
            createdAt
            comments {
                _id
                username
                commentText
              }
            }
          }
`;
        
export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      username
      createdAt
      comments {
        _id
        username
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_THOUGHT = gql`
  mutation removeThought($thoughtId: ID!) {
    removeThought(thoughtId: $thoughtId) {
      _id
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($thoughtId: ID!, $commentId: ID!) {
    removeComment(thoughtId: $thoughtId, commentId: $commentId) {
      _id
      comments {
        _id
        username
        createdAt
        commentText
      }
    }
  }
`;