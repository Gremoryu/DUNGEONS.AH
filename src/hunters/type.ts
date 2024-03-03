import {GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql';

export const HunterInput = new GraphQLInputObjectType({
    name: 'HunterInput',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the hunter.',
        },
        rank: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The rank of the hunter.',
        },
        class: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The class of the hunter.',
        },
        age: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The age of the hunter.',
        },
    },
});

export const Hunter = new GraphQLObjectType({
    name: 'Hunter',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The id of the hunter.',
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the hunter.',
        },
        rank: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The rank of the hunter.',
        },
        class: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The class of the hunter.',
        },
        age: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The age of the hunter.',
        },
        created_at: {type: new GraphQLNonNull(GraphQLString)},
        created_by: {type: new GraphQLNonNull(GraphQLString)},
        updated_at: {type: GraphQLString},
        updated_by: {type: GraphQLString},
        deleted_at: {type: GraphQLString},
        deleted: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The deleted status of the hunter.',
        },
    },
});

