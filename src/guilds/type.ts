export const Guild = `
    type Guild {
        id: ID
        guild_name: String!
        id_guild_master: ID!
        members: Int!
        created_at: String!
        created_by: String!
        updated_at: String
        updated_by: String
        deleted_at: String
        deleted: Int
    }

    input GuildInput {
        guild_name: String!
        id_guild_master: ID!
        members: Int!
    }
`;