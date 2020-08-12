import { User } from './user.model';
import { Assistance } from './assistance.model';

export class Event{
    id:number;
    description:string;
    eventDate:Date;
    name:string;
    user:User;
    state:number;
    assistances:Assistance[]; 
}
