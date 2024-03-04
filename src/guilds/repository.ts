import { RowDataPacket } from 'mysql2';
import { connection } from '../database/db.config';

export const getGuilds = async ({ page, limit }: { page: number, limit: number }, { sort, order }: { sort: string, order: string }) => {

    let query = 'SELECT * FROM guilds WHERE deleted = 0';
    const offset = (page - 1) * limit;

    if (sort && order) {
        query += ` ORDER BY ${sort} ${order}`;
    }

    if (offset >= 0 && limit) {
        query += ` LIMIT ${offset}, ${limit}`;
    }
    console.log(query);
    const [rows] = await connection.execute(query);
    console.log(rows);
    return rows;
}

export const getGuildById = async (id: number) => {

    let query = 'SELECT * FROM guilds WHERE id = ?';
    const [rows] = await connection.execute(query, [id]);

    const result = rows as RowDataPacket[];
    
    return result[0];
}

export const createGuild = async (guild: any) => {
    
        const created_at = new Date();
        const deleted = 0;
        let query = 'INSERT INTO guilds (guild_name, id_guildmaster, members, created_by, created_at, deleted) VALUES (?, ?, ?, ?, ?, ?)';
        const [result] = await connection.execute(query, [guild.guild_name, guild.id_guildmaster, guild.members, guild.created_by, created_at, deleted]);
        const insertId = (result as any).insertId;
        const object = await getGuildById(insertId);

        return object;
        
}

export const updateGuild = async (id: number, guild: any) => {
    const updated_at = new Date();
    let query = 'UPDATE guilds SET guild_name = ?, id_guildmaster = ?, members = ?, updated_at = ? WHERE id = ? AND deleted = 0';
    const [result] = await connection.execute(query, [guild.guild_name, guild.id_guildmaster, guild.members, updated_at, id]);
    
    const object = await getGuildById(id);
    return object;
}

export const deleteGuild = async (id: number) => {
    const deleted_at = new Date();
    const deleted = 1;
    let query = 'UPDATE guilds SET deleted_at = ?, deleted = ? WHERE id = ?';
    const [result] = await connection.execute(query, [deleted_at, deleted, id]);
    
    const object = await getGuildById(id);
    
    return object;

}