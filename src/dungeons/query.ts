export const DungeonQuery = `
    dungeons(page: Int, limit: Int, sort: String, order: String): [Dungeon]
    dungeon(id: ID!): Dungeon
`;