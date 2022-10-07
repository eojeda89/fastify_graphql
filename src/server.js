import { makeExecutableSchema } from "@graphql-tools/schema";
import fastify from "fastify";

import { typeDefs, resolvers } from "./graphql/index.js";
import { createApolloServer } from "./apollo/index.js";

export const startApolloServer = async () => {
    const app = fastify();

    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });

    const server = createApolloServer({ app, schema });
    await server.start();

    app.register(server.createHandler());

    await app.listen(4000);
};