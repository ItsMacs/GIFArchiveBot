import { InputFile } from "grammy";
import { Maybe } from "./utils";

export class Repository{
    readonly id: string;
    contents: {[key: string]: GIF} = {};

    constructor(id: string, contents: {[key:string]:GIF} = {}){
        this.id = id;
        this.contents = contents;
    }

    findGIF(tags: string[]) : Maybe<GIF>{
        for(let gifID in this.contents){
            var gifObj : GIF = this.contents[gifID];
            if(gifObj.hasTags(tags)) return gifObj;
        }

        return undefined;
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

    hasTags(searchTags : string[]) : boolean {
        for(var searchTag in searchTags){
            if(this.tags.includes(searchTag)) return true;
        }

        return false;
    }
}