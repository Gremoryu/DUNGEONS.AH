import { getHunters, getHunterById, createHunter, updateHunter, deleteHunter } from "./hunters/repository";
import { getDungeons, getDungeonById, createDungeon, updateDungeon, deleteDungeon } from "./dungeons/repository";
import { getGuilds, getGuildById, createGuild, updateGuild, deleteGuild } from "./guilds/repository";

export const resolvers = {
    Query: {
        hunters: (_: any, {page, limit}: {page: number, limit: number}, {sort, order}: {sort: number, order: string}) => getHunters({page, limit}, {sort, order}),
        hunter: (_: any, {id}: {id: number}) => getHunterById(id),
        dungeons: (_: any, {page, limit}: {page: number, limit: number}, {sort, order}: {sort: number, order: string}) => getDungeons({page, limit}, {sort, order}),
        dungeon: (_: any, {id}: {id: number}) => getDungeonById(id),
        guilds: (_: any, {page, limit}: {page: number, limit: number}, {sort, order}: {sort: number, order: string}) => getGuilds({page, limit}, {sort, order}),
        guild: (_: any, {id}: {id: number}) => getGuildById(id)
    },
    Mutation: {
        createHunter: async (_: any, {hunter}: {hunter: any}) => {
            return await createHunter(hunter);
        },
        updateHunter: async (_: any, {id, hunter}: {id: number, hunter: any}) => {
            return await updateHunter(id, hunter);
        },
        deleteHunter: async (_: any, {id}: {id: number}) => {
            return await deleteHunter(id);
        },
        createDungeon: async (_: any, {dungeon}: {dungeon: any}) => {
            return await createDungeon(dungeon);
        },
        updateDungeon: async (_: any, {id, dungeon}: {id: number, dungeon: any}) => {
            return await updateDungeon(id, dungeon);
        },
        deleteDungeon: async (_: any, {id}: {id: number}) => {
            return await deleteDungeon(id);
        },
        createGuild: async (_: any, {guild}: {guild: any}) => {
            return await createGuild(guild);
        },
        updateGuild: async (_: any, {id, guild}: {id: number, guild: any}) => {
            return await updateGuild(id, guild);
        },
        deleteGuild: async (_: any, {id}: {id: number}) => {
            return await deleteGuild(id);
        }
    }
}