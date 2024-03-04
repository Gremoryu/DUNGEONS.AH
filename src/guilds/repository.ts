import {connection} from '../database/db.config';

export const getGuilds = async ({page, limit}: {page: number, limit: number}, {sort, order}: {sort: number, order: string}) => {

    let query = 'SELECT * FROM guilds WHERE deleted = 0';
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

export const getGuildById = async (id: number) => {

    let query = 'SELECT * FROM guilds WHERE id = ? AND deleted = 0';
    const [rows] = await connection.execute(query, [id]);

    return rows;
}

export const createGuild = async (guild: any) => {
    const created_at = new Date();
    const deleted = 0;
    let query = 'INSERT INTO guilds (name, master, created_at, deleted) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(query, [guild.name, guild.master, created_at, deleted]);

    return result
}

export const updateGuild = async (id: number, guild: any) => {
    const updated_at = new Date();
    let query = 'UPDATE guilds SET name = ?, master = ?, updated_at = ? WHERE id = ? AND deleted = 0';
    const [result] = await connection.execute(query, [guild.name, guild.master, updated_at, id]);

    return result;
}

export const deleteGuild = async (id: number) => {
    const deleted_at = new Date();
    const deleted = 1;
    let query = 'UPDATE guilds SET deleted_at = ?, deleted = ? WHERE id = ?';
    const [result] = await connection.execute(query, [deleted_at, deleted, id]);

    return result;
}