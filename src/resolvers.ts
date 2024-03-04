import { getHunters, getHunterById, createHunter, updateHunter, deleteHunter } from "./hunters/repository";
import { getDungeons, getDungeonById, createDungeon, updateDungeon, deleteDungeon } from "./dungeons/repository";
import { getGuilds, getGuildById, createGuild, updateGuild, deleteGuild } from "./guilds/repository";

export const resolvers = {
    Query: {
        hunters: (_: any, {page, limit, sort, order}: any,) => getHunters({page, limit}, {sort, order}),
        hunter: (_: any, {id}: any) => getHunterById(id),
        dungeons: (_: any, {page, limit, sort, order}: any) => getDungeons({page, limit}, {sort, order}),
        dungeon: (_: any, {id}: any) => getDungeonById(id),
        guilds: (_: any, {page, limit, sort, order}: any) => getGuilds({page, limit}, {sort, order}),
        guild: (_: any, {id}: any) => getGuildById(id)
    },
    Mutation: {
        createHunter: async (_: any, {hunter}: {hunter: any}) => {
            return await createHunter(hunter);
        },
        updateHunter: async (_: any, {id, hunter}: any) => {
            return await updateHunter(id, hunter);
        },
        deleteHunter: async (_: any, {id}: any) => {
            return await deleteHunter(id);
        },
        createDungeon: async (_: any, {dungeon}: any) => {
            return await createDungeon(dungeon);
        },
        updateDungeon: async (_: any, {id, dungeon}: any) => {
            return await updateDungeon(id, dungeon);
        },
        deleteDungeon: async (_: any, {id}: any) => {
            return await deleteDungeon(id);
        },
        createGuild: async (_: any, {guild}: any) => {

            return await createGuild(guild);
        },
        updateGuild: async (_: any, {id, guild}: any) => {
            return await updateGuild(id, guild);
        },
        deleteGuild: async (_: any, {id}: any) => {
            return await deleteGuild(id);
        }
    }
}