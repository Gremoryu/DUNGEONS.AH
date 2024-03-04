import { connection } from '../database/db.config';
import { RowDataPacket } from 'mysql2';

export const getHunters = async ({ page, limit }: { page: number, limit: number }, { sort, order }: { sort: string, order: string }) => {

    let query = 'SELECT * FROM hunters WHERE deleted = 0';
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

export const getHunterById = async (id: number) => {
    let query = 'SELECT * FROM hunters WHERE id = ?';
    const [rows] = await connection.execute(query, [id]);
    const result = rows as RowDataPacket[];
    return result[0];
}


export const createHunter = async (hunter: any) => {

        const created_at = new Date();
        const deleted = 0;
        let query = 'INSERT INTO hunters (id_guild, name, level, class, age, created_at, created_by, deleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const [result] = await connection.execute(query, [hunter.id_guild, hunter.name, hunter.level, hunter.class, hunter.age, created_at, hunter.created_by, deleted]);
        const insertId = (result as any).insertId;
        const object = await getHunterById(insertId);
        return object;

}

export const updateHunter = async (id: number, hunter: any) => {
    const updated_at = new Date();
    let query = 'UPDATE hunters SET name = ?, level = ?, class = ?, age = ?, updated_at = ? WHERE id = ? AND deleted = 0';
    const [result] = await connection.execute(query, [hunter.name, hunter.level, hunter.class, hunter.age, updated_at, id]);

    const object = await getHunterById(id);
    return object;
}

export const deleteHunter = async (id: number) => {
    const deleted_at = new Date();
    const deleted = 1;
    let query = 'UPDATE hunters SET deleted_at = ?, deleted = ? WHERE id = ?';
    const [result] = await connection.execute(query, [deleted_at, deleted, id]);

    const object = await getHunterById(id);
    return object;
}
