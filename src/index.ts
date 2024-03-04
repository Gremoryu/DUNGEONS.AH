import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./Schema";
import { resolvers } from "./resolvers";

// Crea el servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

const port = parseInt(process.env.PORT_APOLLO || "4000");

(
    async () => {
        // Proporciona un objeto de opciones con todas las propiedades requeridas
        const { url } = await startStandaloneServer(server, { 
            listen: { port: port },
            context: () => ({}) // Proporciona un objeto de contexto vacío
        });
        console.log(`🚀 Server ready at ${url}`);
    }
)()