export const HunterQuery = `
    type Query {
        hunters(page: Int, limit: Int, sort: String, order: String): [Hunter]
        hunter(id: ID!): Hunter
`;