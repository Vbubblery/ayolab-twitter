import { Post } from "./../../orm/entities/post";
import { User } from "../../orm/entities/user";
const sort = require('fast-sort');
// queries:

export const getAllUserResolver = async (__: any, args: any) => {
  return await User.find();
};

export const getTopNResolver = async (__: any, args: any) => {
  const startAt = + new Date();
  const number = args.number;
  const user = await User.findOneOrFail({ where: { id: args.userId } });
  const followedUsers = (await user.followed) as User[];
  const result = (await Promise.all(
    followedUsers.map(u => Promise.resolve(u.posts as any))
  ))
    .flat()
    .sort((a, b) => +b.create - +a.create)
    .slice(0, number);
  const endAt = + new Date();
  return {posts:result,time:endAt-startAt};

  // const user = await User.createQueryBuilder('user').leftJoin('user.posts','posts').orderBy('posts.create','ASC').getMany()
  // // const followed = await user.followed;
  // console.log(user);

  // console.log(await user[0].posts)
};

export const getTopNResolverOpt1 = async (__: any, args: any) => {
  const startAt = + new Date();
  const number = args.number;
  // find the user
  const user = await User.findOneOrFail({ where: { id: args.userId } });
  // get the user's followed
  const followedUsers = (await user.followed) as User[];

  // get the recently posts of the followed users.
  const recentlyPostsOfFollowedUsers = (await Promise.all(
    followedUsers.map(u => {
      const result = Post.createQueryBuilder("post")
        .where("post.user = :userId", { userId: u.id })
        .orderBy({ "post.createdAt": "DESC" })
        .limit(number)
        .getMany();
      return Promise.resolve(result);
    })
  )).flat();
  // sort and then tane the top N
  const posts = sort(recentlyPostsOfFollowedUsers).desc().slice(0,number);
  const endAt = + new Date();
  return {posts,time:endAt-startAt};
};

// ---------------------------------------------------------
// mutations:
export const createUserResolver = async (__: any, args: any) => {
  // console.log(args);

  const name: string = args.UserInput.name;
  const post: any = {
    text: args.UserInput.text
  };
  const t = await new User({
    name,
    post
  } as any).save();
  return { status: 1 };
};

export const userFollowResolver = async (__: any, args: any) => {
  const id = args.follow.userId;
  const followId = args.follow.followId;
  const user = await User.findOneOrFail({ where: { id } });
  const follow = await User.findOneOrFail({ where: { id: followId } });
  (((await user.followed) as unknown) as User).push(follow);
  await user.save();
  return { status: 1 };
};
