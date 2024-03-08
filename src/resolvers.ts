import { getHunters, getHunterById, createHunter, updateHunter, deleteHunter } from "./hunters/repository";
import { getDungeons, getDungeonById, createDungeon, updateDungeon, deleteDungeon } from "./dungeons/repository";
import { getGuilds, getGuildById, createGuild, updateGuild, deleteGuild } from "./guilds/repository";
import { getAdmins,getAdminById,getAdminByUser,createAdmin,updateAdmin,deleteAdmin } from "./admin/repository";
import { EventNotification } from "./services/Notifications/EventNotification";
import { login } from "./Authentication/auth";

export const resolvers = {
    Query: {
        hunters: (_: any, {page, limit, sort, order}: any,) => getHunters({page, limit}, {sort, order}),
        hunter: (_: any, {id}: any) => getHunterById(id),
        dungeons: (_: any, {page, limit, sort, order}: any) => getDungeons({page, limit}, {sort, order}),
        dungeon: (_: any, {id}: any) => getDungeonById(id),
        guilds: (_: any, {page, limit, sort, order}: any) => getGuilds({page, limit}, {sort, order}),
        guild: (_: any, {id}: any) => getGuildById(id),
        admins: (_: any, {page, limit, sort, order}: any) => getAdmins({page, limit}, {sort, order}),
        admin: (_: any, {id}: any) => getAdminById(id),
    },
    Mutation: {
        createHunter: async (_: any, {hunter}: {hunter: any}) => {
            const newHunter = await createHunter(hunter);
            EventNotification('New Hunter Created: ' + newHunter.name);
            return newHunter;
        },
        updateHunter: async (_: any, {id, hunter}: any) => {
            const updatedHunter = await updateHunter(id, hunter);
            EventNotification('Hunter Updated: ' + updatedHunter.name);
            return updatedHunter;
        },
        deleteHunter: async (_: any, {id}: any) => {
            const deletedHunter = await deleteHunter(id);
            EventNotification('Hunter Deleted');
            return deletedHunter;
        },
        createDungeon: async (_: any, {dungeon}: any) => {
            const newDungeon = await createDungeon(dungeon);
            EventNotification('New Dungeon Created: ' + newDungeon.direction);
            return newDungeon;
        },
        updateDungeon: async (_: any, {id, dungeon}: any) => {
            const updatedDungeon = await updateDungeon(id, dungeon);
            EventNotification('Dungeon Data on ' + updatedDungeon.direction + ' Updated');
            return updatedDungeon;
        },
        deleteDungeon: async (_: any, {id}: any) => {
            const deletedDungeon = await deleteDungeon(id);
            EventNotification('Dungeon Deleted');
            return deletedDungeon;
        },
        createGuild: async (_: any, {guild}: any) => {
            const newGuild = await createGuild(guild);
            EventNotification('New Guild Created: ' + newGuild.guild_name);
            console.log('New Guild Created: ' + newGuild.guild_name);
            return newGuild;
        },
        updateGuild: async (_: any, {id, guild}: any) => {
            const updatedGuild = await updateGuild(id, guild);
            EventNotification('Guild Updated: ' + updatedGuild.guild_name);
            return updatedGuild;
        },
        deleteGuild: async (_: any, {id}: any) => {
            const deletedGuild = await deleteGuild(id);
            EventNotification('Guild Deleted');
            return deletedGuild;
        },
        createAdmin: async (_: any, {admin}: any) => {
            const newAdmin = await createAdmin(admin);
            EventNotification('New Admin Created: ' + newAdmin.user);
            return newAdmin;
        },
        updateAdmin: async (_: any, {id, admin}: any) => {
            const updatedAdmin = await updateAdmin(id, admin);
            EventNotification('Admin Updated: ' + updatedAdmin.user);
            return updatedAdmin;
        },
        deleteAdmin: async (_: any, {id}: any) => {
            const deletedAdmin = await deleteAdmin(id);
            EventNotification('Admin Deleted');
            return deletedAdmin;
        },
        loginAdmin: async (_: any, {UserName, Password}: any) => {
            try {
                const token = await login(UserName, Password);
                EventNotification('Admin Logged In: ' + UserName);
                return token;
            } catch (error) {
                console.error(error);
            }
        }
    }
}