export const Admin = `
    type Admin {
        id: ID
        user: String!
        password: String!
        created_at: String!
        created_by: String!
        updated_at: String
        updated_by: String
        deleted_at: String
        deleted: Int
    }

    input AdminInput {
        user: String!
        password: String!
        created_by: String!
    }
`;

export interface AdminEntity {
    id: number;
    user: string;
    password: string;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    deleted_at: string;
    deleted: number;
}