import { GraphQLObjectType } from "graphql";
import { PostFragment } from "../fragments/post";
import { headerFragment } from "../fragments/header";

export const PostType = new GraphQLObjectType({
  name: "PostType",
  fields: {
    ...headerFragment,
    ...PostFragment
  }
});
