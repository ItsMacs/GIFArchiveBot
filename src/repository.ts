import { InputFile } from "grammy";

export class Repository{
    readonly id: string;
    contents: {[key: string]: GIF} = {};

    constructor(id: string, contents: {[key:string]:GIF} = {}){
        this.id = id;
        this.contents = contents;
    }
}

export class GIF{
    id: string;
    tags: string[];
    
    constructor(id: string, tags: string[] = []){
        this.id = id;
        this.tags = tags;
    }

    static async Register(id: string, ) : Promise<GIF>{
        return new GIF(id);
    }
}