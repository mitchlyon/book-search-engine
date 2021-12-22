import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login($email: String!, $password: String!)  {
            token
            user {
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

export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBook!) {
      saveBook(input: $input) {
          _id
          username
          email
          bookcount
          savedBooks {
              bookId
              authors
              image
              link
              title
              description
          }
      }
  }
`;

export const remove_book = gql`
  mutation removeBook($bookId: String!) {
      removeBook(bookId: $bookId) {
        _id
        username
        email
        bookcount
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
      }
  }
`;