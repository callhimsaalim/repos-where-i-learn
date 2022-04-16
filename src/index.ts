import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () =>{

    const orm =await MikroORM.init(microConfig);

    await orm.getMigrator().up();                             // to run migration from code | creates pg sql code
    
    const posts = await orm.em.find(Post, {});
    console.log(posts);
    
    // const post = orm.em.create(Post, {title: 'kkk'})
    // await orm.em.persistAndFlush(post)                         //run sql

};

main().catch(err=> {
    console.log(err);
    
})
