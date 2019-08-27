import { validate } from "class-validator";
import {
  getRepository,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  UpdateResult,
  BaseEntity,
  ObjectType,
  ObjectID,
  FindConditions,
  RemoveOptions,
  DeleteResult
} from "typeorm";

export abstract class Basic extends BaseEntity {
  [x: string]: any;
  async save() {
    const errs = await validate(this);
    if (errs.length !== 0) throw new Error("Check your input");
    return getRepository(this.constructor).save(this);
  }
  async update() {
    if (!this.id) throw new Error("Could not operate it!");
    const errs = await validate(this);
    if (errs.length !== 0) throw new Error("Check your input");
    await getRepository(this.constructor).save(this);
  }

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @CreateDateColumn({
    type: "timestamp"
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: "timestamp"
  })
  updatedAt!: Date;
}
