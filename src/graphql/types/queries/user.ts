import { GraphQLObjectType, GraphQLList } from "graphql";
import { UserFragment } from "../fragments/user";
import { headerFragment } from "../fragments/header";
import { PostType } from "./post";

export const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    ...headerFragment,
    ...UserFragment,
    posts: {
      type: new GraphQLList(PostType)
    },
    followed: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "FollowedType",
          fields: {
            ...headerFragment,
            ...UserFragment,
            posts: {
              type: new GraphQLList(PostType)
            }
          }
        })
      )
    },
    following: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "FollowingType",
          fields: {
            ...headerFragment,
            ...UserFragment,
            posts: {
              type: new GraphQLList(PostType)
            }
          }
        })
      )
    }
  }
});
