import "dotenv/config";
import { ApolloServer} from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./Schema";
import { resolvers } from "./resolvers";
import context from "./context/context";

// Crea el servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers});

const PORT = parseInt(process.env.PORT_APOLLO || "4000");

// Inicia el servidor

(
    async () => {
        const { url } = await startStandaloneServer(server, { 
            listen: { port: PORT },
            context: context
        });
        console.log(`🚀 Server ready at ${url}`);
    }
)();
