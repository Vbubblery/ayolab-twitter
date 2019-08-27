import { Basic } from "./basic";
import {
  Entity,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Post } from "./post";

export interface UserObject {
  name: string;
  posts?: Post[];
  followed?: User[];
  following?: User[];
}

export interface UserOptionalObject {
  name?: string;
  posts?: Post[];
  followed?: User[];
  following?: User[];
}

@Entity()
export class User extends Basic {
  constructor(params: UserObject) {
    super();
    if (params) {
      this.name = params.name;
      this.posts = Promise.resolve([]);
    }
  }

  @Column({
    type: "text",
    nullable: false,
    unique: true
  })
  name!: string;

  @OneToMany(type => Post, post => post.user, {
    cascade: true,
    lazy: true
  })
  @JoinColumn()
  posts?: Promise<Post[]>;

  @ManyToMany(type => User, followed => followed.following, {
    lazy: true
  })
  @JoinTable({
    joinColumn: {
      name: "followed",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "following",
      referencedColumnName: "id"
    }
  })
  followed?: Promise<User[]>;

  @ManyToMany(type => User, following => following.followed, {
    lazy: true
  })
  following?: Promise<User[]>;
}
