export const HunterMutation = `
    type Mutation {
        createHunter(hunter: HunterInput): Hunter
        updateHunter(id: ID!, hunter: HunterInput): Hunter
        deleteHunter(id: ID!): Hunter
`;
