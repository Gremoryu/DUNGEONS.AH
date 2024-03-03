import { HunterInput, HunterType } from "./type";
import { createHunter, updateHunter, deleteHunter } from "./repository";
import { GraphQLFieldConfig, GraphQLObjectType } from "graphql";

export type MutationType = {
    createHunter(hunter: typeof HunterInput): HunterType,
    updateHunter(): HunterType,
    deleteHunter(): HunterType,
};

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createHunter: {
            input: HunterInput,
            args: {
                name: { type: HunterInput.getFields().name},
                rank: { type: HunterInput.getFields().rank },
                class: { type: HunterInput.getFields().class },
                age: { type: HunterInput.getFields().age },
            },
            resolve: async (parent, args) => {
                return await createHunter(args);
            },
        },
        updateHunter: {
            input: HunterInput,
            args: {
                id: { type: HunterInput.getFields().id },
                name: { type: HunterInput.getFields().name },
                rank: { type: HunterInput.getFields().rank },
                class: { type: HunterInput.getFields().class },
                age: { type: HunterInput.getFields().age },
            },
            resolve: async (source, args) => {
                return await updateHunter(args.id, args);
            },
        },
        deleteHunter: {
            input: HunterInput,
            args: {
                id: { type: HunterInput.getFields().id },
            },
            resolve: async (source, args) => {
                return await deleteHunter(args.id);
            },
        },
    },
});