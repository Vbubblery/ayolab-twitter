import { User } from "./../../orm/entities/user";
import { Post, PostObject } from "../../orm/entities/post";

// queries:

export const getAllPostResolver = async (__: any, args: any) => {
  return await Post.find();
};

// ---------------------------------------------------------
// mutations:
export const createPostResolver = async (__: any, args: any) => {
  // console.log(args);
  const id = args.PostCreate.userId;
  const user = await User.findOneOrFail({ where: { id } });
  const post = new Post(args.PostCreate.post);
  post.user = user;
  await post.save();
  return { status: 1 };
};
