import { connection } from '../database/db.config';

export const getDungeons = async ({ page, limit }: { page: number, limit: number }, { sort, order }: { sort: number, order: string }) => {
    
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
    
        let query = 'SELECT * FROM dungeons WHERE id = ? AND deleted = 0';
        const [rows] = await connection.execute(query, [id]);
    
        return rows;
}

export const createDungeon = async (dungeon: any) => {
    const created_at = new Date();
    const deleted = 0;
    let query = 'INSERT INTO dungeons (name, level, created_at, deleted) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(query, [dungeon.name, dungeon.level, created_at, deleted]);

    return result
}

export const updateDungeon = async (id: number, dungeon: any) => {
    const updated_at = new Date();
    let query = 'UPDATE dungeons SET name = ?, level = ?, updated_at = ? WHERE id = ? AND deleted = 0';
    const [result] = await connection.execute(query, [dungeon.name, dungeon.level, updated_at, id]);

    return result;
}

export const deleteDungeon = async (id: number) => {
    const deleted_at = new Date();
    const deleted = 1;
    let query = 'UPDATE dungeons SET deleted_at = ?, deleted = ? WHERE id = ?';
    const [result] = await connection.execute(query, [deleted_at, deleted, id]);

    return result;
}