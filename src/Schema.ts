import {Hunter} from './hunters/type';
import {Dungeon} from './dungeons/type';
import {Guild} from './guilds/type';
import { HunterQuery } from './hunters/query';
import { DungeonQuery } from './dungeons/query';
import { GuildQuery } from './guilds/query';
import { HunterMutation } from './hunters/mutation';
import { DungeonMutation } from './dungeons/mutation';
import { GuildMutation } from './guilds/mutation';

export const typeDefs = `
    ${Hunter}
    ${Dungeon}
    ${Guild}
    ${HunterQuery}
    ${DungeonQuery}
    ${GuildQuery}
    ${HunterMutation}
    ${DungeonMutation}
    ${GuildMutation}
`;