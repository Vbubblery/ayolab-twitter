import { PostType } from './post';
import { GraphQLObjectType, GraphQLList, GraphQLInt } from "graphql";


export const topResponseType = new GraphQLObjectType({
  name: "TopResponse",
  fields: {
    posts:{
        type: new GraphQLList(PostType)
    },
    time:{
        type: GraphQLInt
    }
  }
});
