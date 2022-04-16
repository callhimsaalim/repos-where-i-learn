import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {

  @PrimaryKey()                    //Declare this to make that as db column
  _id!: number;

  @Property({type: "date"})
  createdAt: Date = new Date();

  @Property({type:"date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({type: "text"})                               //if u dont mention type explicitly, it will take default varchar(233)
  title!: string;

}