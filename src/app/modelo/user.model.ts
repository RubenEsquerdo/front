import {Relationship} from './relationship.model';
import {Story} from './story.model';
import { Reaction } from './reaction.model';
import { Assistance } from './assistance.model';
import { Event } from './event.model';
export class User{
    id: number;
    name:string;
    surname: string;
    birdthDate:string;
    startDate: string;
    user:string;
    pass: string;
    events:Event[];
    score:number;
    relationships:Relationship[];
    stories:Story[];
    reactions:Reaction[];
    assistances:Assistance[];
}
