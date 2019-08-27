import { GraphQLNonNull, GraphQLString } from "graphql";

export const PostFragment = {
  text: {
    type: GraphQLNonNull(GraphQLString)
  },
  create: {
    type: GraphQLString
  }
};
