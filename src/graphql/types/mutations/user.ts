import { GraphQLInputObjectType, GraphQLString } from "graphql";
import { UserFragment } from "../fragments/user";
import { PostFragment } from "../fragments/post";

export const UserInput = new GraphQLInputObjectType({
  name: "UserInput",
  fields: UserFragment
});

export const UserFollowedInput = new GraphQLInputObjectType({
  name: "followUser",
  fields: {
    userId: { type: GraphQLString },
    followId: { type: GraphQLString }
  }
});
