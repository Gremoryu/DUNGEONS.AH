export const Guild = `
    type Guild {
        id: ID!
        name: String!
        master: String!
        created_at: String!
        updated_at: String
        deleted_at: String
        deleted: Int
    }

    type GuildInput {
        id: ID!
        name: String!
        master: String!
    }
`;