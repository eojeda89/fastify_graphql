import { ApolloServer} from "apollo-server-fastify";
import { ApolloServerPluginDrainHttpServer} from "apollo-server-core";

export const createApolloServer = ({app, schema}) => {
    return new ApolloServer({
        schema,
        context: ({request, reply}) => ({request, reply}),
        plugins: [
            ApolloServerPluginDrainHttpServer({httpServer: app.server}),
            {
                serverWillStart: async () => {
                    return {
                        drainServer: async () => {
                            await app.close();
                        },
                    };
                },
            },
        ],
    });
};