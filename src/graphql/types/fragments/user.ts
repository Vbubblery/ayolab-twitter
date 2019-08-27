import { GraphQLNonNull, GraphQLString } from "graphql";

export const UserFragment = {
  name: {
    type: GraphQLNonNull(GraphQLString)
  }
};
