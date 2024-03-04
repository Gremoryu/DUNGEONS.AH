export const Hunter = `
    type Hunter {
        id: ID
        id_guild: ID
        name: String!
        rank: String!
        class: String!
        age: Int!
        created_at: String!
        created_by: String!
        updated_at: String
        updated_by: String
        deleted_at: String
        deleted: Int
    }

    input HunterInput {
        id_guild: ID
        name: String!
        rank: String!
        class: String!
        age: Int!
        created_by: String!
    }
`;