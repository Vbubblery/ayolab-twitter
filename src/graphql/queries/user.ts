import { PostType } from "./../types/queries/post";
import { UserType } from "../types/queries/user";
import {
  getAllUserResolver,
  getTopNResolver,
  getTopNResolverOpt1
} from "../resolvers/user";
import { GraphQLList, GraphQLString, GraphQLInt } from "graphql";
import { topResponseType } from "../types/queries/topResponse";

export const Users = {
  type: new GraphQLList(UserType),
  args: {},
  resolve: getAllUserResolver
};

export const getTopN = {
  type: topResponseType,
  args: {
    userId: { type: GraphQLString },
    number: { type: GraphQLInt }
  },
  resolve: getTopNResolver
};

export const getTopN1 = {
  type: topResponseType,
  args: {
    userId: { type: GraphQLString },
    number: { type: GraphQLInt }
  },
  resolve: getTopNResolverOpt1
};
