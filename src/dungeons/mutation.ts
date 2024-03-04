export const DungeonMutation = `
    type Mutation {
        createDungeon(dungeon: DungeonInput): Dungeon
        updateDungeon(id: ID!, dungeon: DungeonInput): Dungeon
        deleteDungeon(id: ID!): Dungeon
    }
`;