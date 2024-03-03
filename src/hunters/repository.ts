import { connection } from '../database/db.config';
import { Hunter } from './type';

export const getHunters = async ({ offset, limit }: { offset: number, limit: number }, { sort, order }: { sort: number, order: string}) => {

    let query = 'SELECT * FROM hunters';

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

    return rows;
}


export const createHunter = async (hunter: Hunter) => {
    const created_at = new Date();
    const deleted = 0;
    let query = 'INSERT INTO hunters (name, rank, class, age, created_at, deleted) VALUES (?, ?, ?, ?, ?, ?)';
    const [result] = await connection.execute(query, [hunter.name, hunter.rank, hunter.class, hunter.age, created_at, deleted]);

    return result;
}

export const updateHunter = async (id: number, hunter: HunterType) => {
    const updated_at = new Date();
    let query = 'UPDATE hunters SET name = ?, rank = ?, class = ?, age = ?, updated_at = ? WHERE id = ?';
    const [result] = await connection.execute(query, [hunter.name, hunter.rank, hunter.class, hunter.age, updated_at, id]);

    return result;
}

export const deleteHunter = async (id: number) => {
    const deleted_at = new Date();
    const deleted = 1;
    let query = 'UPDATE hunters SET deleted_at = ?, deleted = ? WHERE id = ?';
    const [result] = await connection.execute(query, [deleted_at, deleted, id]);

    return result;
}
