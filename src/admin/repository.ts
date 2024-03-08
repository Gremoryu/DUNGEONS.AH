import { connection } from '../database/db.config';
import { RowDataPacket } from 'mysql2';
import { AdminEntity } from './type';
import * as bcrypt from 'bcrypt';

export const getAdmins = async ({ page, limit }: { page: number, limit: number }, { sort, order }: { sort: string, order: string }) => {

    let query = 'SELECT * FROM admin WHERE deleted = 0';
    const offset = (page - 1) * limit;

    if (sort && order) {
        query += ` ORDER BY ${sort} ${order}`;
    }

    if (offset >= 0 && limit) {
        query += ` LIMIT ${offset}, ${limit}`;
    }

    const [rows] = await connection.execute(query);
    return rows;
}

export const getAdminByUser = async (UserName: string): Promise<AdminEntity> => {
    let query = 'SELECT * FROM admin WHERE user = ? AND deleted = 0';
    const [rows] = await connection.execute(query, [UserName]);
    const result = rows as any;
    return result[0];
}

export const getAdminById = async (id: number) => {
    let query = 'SELECT * FROM admin WHERE id = ?';
    const [rows] = await connection.execute(query, [id]);
    const result = rows as any;
    return result[0];
}

export const createAdmin = async (admin: any) => {
    try {
        const hashedPassword = await bcrypt.hash(admin.password, 10);
        console.log(hashedPassword);
        const created_at = new Date();
        const deleted = 0;
        let query = 'INSERT INTO admin (user, password, created_at, created_by, deleted) VALUES (?, ?, ?, ?, ?)';
        const [result] = await connection.execute(query, [admin.user, hashedPassword, created_at, admin.created_by, deleted]);
        const insertId = (result as any).insertId;
        const object = await getAdminById(insertId);
        return object;
    } catch (error) {
        console.error(error);
      }
}

export const updateAdmin = async (id: number, admin: any) => {
    const updated_at = new Date();
    let query = 'UPDATE admin SET user = ?, password = ?, updated_at = ? WHERE id = ? AND deleted = 0';
    const [result] = await connection.execute(query, [admin.user, admin.password, updated_at, id]);

    const object = await getAdminById(id);
    return object;
}

export const deleteAdmin = async (id: number) => {
    const deleted_at = new Date();
    const deleted = 1;
    let query = 'UPDATE admin SET deleted_at = ?, deleted = ? WHERE id = ?';
    const [result] = await connection.execute(query, [deleted_at, deleted, id]);

    const object = await getAdminById(id);
    return object;
}