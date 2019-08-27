import { Basic } from "./basic";
import {
  Entity,
  Column,
  Unique,
  ManyToOne,
  JoinColumn,
  OneToOne
} from "typeorm";

import { IsString, IsNotEmpty } from "class-validator";
import { User } from "./user";

export interface PostObject {
  text: string;
}

export interface PostOptionalObject {
  text?: string;
}

@Entity()
export class Post extends Basic {
  constructor(params: PostObject) {
    super();
    if (params) {
      this.text = params.text;
    }
  }

  @IsNotEmpty()
  @IsString()
  @Column({
    type: "text",
    nullable: false
  })
  text?: string;

  @Column({
    type: "text"
  })
  create: string = (+new Date()).toString();

  @ManyToOne(type => User, user => user.post)
  @JoinColumn()
  user!: User;
}
