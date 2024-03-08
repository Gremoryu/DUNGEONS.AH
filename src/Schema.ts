import {Hunter} from './hunters/type';
import {Dungeon} from './dungeons/type';
import { Admin } from './admin/type';
import {Guild} from './guilds/type';
import { HunterQuery } from './hunters/query';
import { DungeonQuery } from './dungeons/query';
import { AdminQuery } from './admin/query';
import { GuildQuery } from './guilds/query';
import { HunterMutation } from './hunters/mutation';
import { DungeonMutation } from './dungeons/mutation';
import { AdminMutation } from './admin/mutation';
import { GuildMutation } from './guilds/mutation';

export const typeDefs = `
    ${Hunter}
    ${Dungeon}
    ${Admin}
    ${Guild}
    ${HunterQuery}
    ${DungeonQuery}
    ${AdminQuery}
    ${GuildQuery}
    ${HunterMutation}
    ${DungeonMutation}
    ${AdminMutation}
    ${GuildMutation}
`;