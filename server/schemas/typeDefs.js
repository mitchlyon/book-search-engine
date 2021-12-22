const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, emial: String!, password: String!): Auth
        saveBook(input: savedBook!): user
        removeBook(bookId: ID!): user
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        
        savedBooks: [Book]
    }

    input savedBook {
        description: String
        title: String
        bookId: String
        image: String
        link: String
        authors: [String]
    }

    type Book {
        
        bookId: String
        authors: [String]
        
        description: Sting
        title: String
        image: Sting
        link: String
    }
`;

module.exports = typeDefs;