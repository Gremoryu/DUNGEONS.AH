import { connection } from '../database/db.config';
import { RowDataPacket } from 'mysql2';

export const getDungeons = async ({ page, limit }: { page: number, limit: number }, { sort, order }: { sort: string, order: string }) => {
    
        let query = 'SELECT * FROM dungeons WHERE deleted = 0';
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

export const getDungeonById = async (id: number) => {
    
        let query = 'SELECT * FROM dungeons WHERE id = ?';
        const [rows] = await connection.execute(query, [id]);
    
        const result = rows as RowDataPacket[];
        return result[0];
}

export const createDungeon = async (dungeon: any) => {
    const created_at = new Date();
    const deleted = 0;
    let query = 'INSERT INTO dungeons (direction, level, id_owner_guild, creation_date, status, created_by, created_at, deleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const [result] = await connection.execute(query, [dungeon.direction, dungeon.level, dungeon. id_owner_guild, dungeon.creation_date, dungeon.status, dungeon.created_by, created_at, deleted]);
    const insertId = (result as any).insertId;
    const object = await getDungeonById(insertId);
    return object;
}

export const updateDungeon = async (id: number, dungeon: any) => {
    const updated_at = new Date();
    let query = 'UPDATE dungeons SET direction = ?, level = ?, id_owner_guild = ?, creation_date = ?, status = ?, created_by = ? WHERE id = ? AND deleted = 0';
    const [result] = await connection.execute(query, [dungeon.direction, dungeon.level, dungeon.id_owner_guild, dungeon.creation_date, dungeon.status, dungeon.created_by, id]);

    const object = await getDungeonById(id);
    return object;
}

export const deleteDungeon = async (id: number) => {
    const deleted_at = new Date();
    const deleted = 1;
    let query = 'UPDATE dungeons SET deleted_at = ?, deleted = ? WHERE id = ?';
    const [result] = await connection.execute(query, [deleted_at, deleted, id]);

    const object = await getDungeonById(id);
    return object;
}