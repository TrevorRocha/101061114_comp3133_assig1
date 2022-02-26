const { gql } = require('apollo-server-express');
exports.typeDefs = gql `
    scalar Date
    type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }
    type Listing {
        id: ID!
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username: String!
    }
    type Booking {
        id: ID!
        listing_id: String!
        booking_id: String!
        booking_date: Date!
        booking_start: Date!
        booking_end: Date!
        username: String!
    }
    type Auth {
        secret: String
    }
    type Query {
        getAllListings: [Listing]
        getListingsByName(name: String!): [Listing]
        getListingsByCity(city: String!): [Listing]
        getListingsByPostalCode(postal_code: String!): [Listing]
        getAllAdminListings(userId: String!): [Listing]
        getAllUserBookings(userId: String!): [Booking]
        
    }
    type Mutation {
        createNewUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!): User
        
        login(username: String!
            password: String!): ID    
        createNewListing(
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!): Listing
        createNewBooking(
            listing_id: String!
            booking_id: String!
            booking_start: Date!
            booking_end: Date!
            username: String!): Booking
    }
`
    