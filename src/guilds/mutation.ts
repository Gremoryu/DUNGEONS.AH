export const GuildMutation = `
    type Mutation {
        createGuild(guild: GuildInput): Guild
        updateGuild(id: ID!, guild: GuildInput): Guild
        deleteGuild(id: ID!): Guild
    }
`;