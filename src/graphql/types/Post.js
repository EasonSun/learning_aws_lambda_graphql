'use strict';

const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
} = GraphQL;


const PostType = new GraphQL.GraphQLObjectType({
	name: 'Post',
	description: 'Post Type, for all the posts present in Reddit.',
	
	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'ID of the post',
		},
		
