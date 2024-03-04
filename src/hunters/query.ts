export const HunterQuery = `
    type Query {
        hunters(offset: Int, limit: Int, sort: String, order: String): [Hunter]
        hunter(id: ID!): Hunter
    }
`;