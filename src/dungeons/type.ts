export const Dungeon = `
    type Dungeon {
        id: ID
        direction: String!
        rank: String!
        id_owner_guild: ID!
        creation_date: String!
        status: String!
        created_at: String!
        created_by: String!
        updated_at: String
        updated_by: String
        deleted_at: String
        deleted: Int
    }

    input DungeonInput {
        direction: String!
        rank: String!
        id_owner_guild: ID!
        creation_date: String!
        status: String!
    }
`;