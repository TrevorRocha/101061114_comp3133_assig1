const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const TypeDefs = require('./schema')
const Resolvers = require('./resolvers.js')

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect("mongodb+srv://trevorrocha:trevorPassword123@trevorcluster.yqb8p.mongodb.net/101061114_comp3133_assig1?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(success => {
    console.log('MongoDB Connected...')
}).catch(err => {
    console.log('MongoDB Error. Failed To Connect...')
});

const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers,
});

const app = express();
app.use(express.json());
app.use('*', cors());

server.start().then(res => {
    server.applyMiddleware({ app });
    app.listen(4000, () =>
        console.log(`Server Port: http://localhost:4000${server.graphqlPath}`))
})


