import {Reaction} from './reaction.model';
import {User} from './user.model';

export class Story{
    id:number;
    content: string;
    //user:string;
    publishDate:string;
    reactions:Reaction[];
}
