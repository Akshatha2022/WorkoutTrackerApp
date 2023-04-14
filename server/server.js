// require("dotenv").config();
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const express = require("express");
const mongoose = require("mongoose");
// const workoutRoutes = require("");
const userRoutes = require("./routes/api/user-routes");
const path = require("path");
const {authMiddleware} = require('./utils/auth');
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

// express app
const app = express();

app.use(express.static(path.resolve(__dirname, "")));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/user-routes", userRoutes);

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

startApolloServer(typeDefs, resolvers);

// connect to database
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     // listen for requests
//     app.listen(process.env.PORT, () => {
//       console.log("connected to db & listening on port", process.env.PORT);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });