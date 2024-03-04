export const Dungeon = `
    type Dungeon {
        id: ID!
        name: String!
        guild: String!
        created_at: String!
        updated_at: String
        deleted_at: String
        deleted: Int
    }

    type DungeonInput {
        id: ID!
        name: String!
        guild: String!
    }
`;