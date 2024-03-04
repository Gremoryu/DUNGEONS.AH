export const GuildQuery = `
    guilds(page: Int, limit: Int, sort: String, order: String): [Guild]
    guild(id: ID!): Guild
`;