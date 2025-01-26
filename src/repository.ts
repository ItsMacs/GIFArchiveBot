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

    saveToSQL(){
        
    }
}

export class GIF{
    file_unique_id: string;
    file_id : string;
    tags: string[];
    
    constructor(file_unique_id: string, file_id : string, tags: string[] = []){
        this.file_unique_id = file_unique_id;
        this.file_id = file_id;
        this.tags = tags;
    }

    static async Register(file_unique_id: string, file_id: string) : Promise<GIF>{
        return new GIF(file_unique_id, file_id);
    }

    hasTags(searchTags : string[]) : boolean {
        for(var searchTag in searchTags){
            if(this.tags.includes(searchTag)) return true;
        }

        return false;
    }

    saveToSQL(){
        
    }
}