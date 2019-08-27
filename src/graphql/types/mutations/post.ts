import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { PostFragment } from "../fragments/post";

export const PostInput = new GraphQLInputObjectType({
  name: "PostInput",
  fields: PostFragment
});

export const PostCreate = new GraphQLInputObjectType({
  name: "PostCreate",
  fields: {
    userId: {
      type: GraphQLNonNull(GraphQLString)
    },
    post: {
      type: PostInput
    }
  }
});
