export const AdminQuery = `
        admins(page: Int, limit: Int, sort: String, order: String): [Admin]
        admin(id: ID!): Admin
`;