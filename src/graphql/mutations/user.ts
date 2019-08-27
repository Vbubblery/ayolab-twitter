import { UserInput, UserFollowedInput } from "../types/mutations/user";
import { createUserResolver, userFollowResolver } from "../resolvers/user";
import { responseType } from "../types/queries/response";

export const createUserParse = {
  type: responseType,
  args: {
    UserInput: {
      type: UserInput
    }
  },
  resolve: createUserResolver
};

export const userFollowParse = {
  type: responseType,
  args: {
    follow: {
      type: UserFollowedInput
    }
  },
  resolve: userFollowResolver
};
