import { PostCreate } from "../types/mutations/post";
import { createPostResolver } from "../resolvers/post";
import { responseType } from "../types/queries/response";

export const createPostParse = {
  type: responseType,
  args: {
    PostCreate: {
      type: PostCreate
    }
  },
  resolve: createPostResolver
};
