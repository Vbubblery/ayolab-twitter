import { PostType } from "../types/queries/post";
import { getAllPostResolver } from "../resolvers/post";
import { GraphQLList } from "graphql";

export const Posts = {
  type: new GraphQLList(PostType),
  args: {},
  resolve: getAllPostResolver
};
