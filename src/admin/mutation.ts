export const AdminMutation = `
        createAdmin(admin: AdminInput): Admin
        updateAdmin(id: ID!, admin: AdminInput): Admin
        deleteAdmin(id: ID!): Admin
        loginAdmin(UserName:String!, Password:String!): String
`;