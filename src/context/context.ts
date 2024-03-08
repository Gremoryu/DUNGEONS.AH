import { GraphQLError } from "graphql";
import { verifyToken } from "../Authentication/auth";

export default async ({ req, _res }: any) => {
  if (req.body.operationName === "IntrospectionQuery") {
    return {};
  }
  if (
    req.body.query.includes("createAdmin") ||
    req.body.query.includes("login")
  ) {
    return {};
  }
  const token = req.headers.authorization || "";
  if (!token) {
    throw new GraphQLError("No authentication token provided", {
      extensions: {
        code: "UNAUTHENTICATED",
      },
    });
  }
  const user = verifyToken(token);
  if (!user) {
    throw new GraphQLError("User is not Authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
      },
    });
  }
  return { user };
};