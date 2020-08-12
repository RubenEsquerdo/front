import { Pipe, PipeTransform } from '@angular/core';
import {Reaction} from '../modelo/reaction.model';

@Pipe({
  name: 'reactions'
})
export class ReactionsPipe implements PipeTransform {

  transform(value: Reaction[]): number{
    let like=0;
    for (let i= 0; i < value.length; i++) {     
      if(value[i].reactionType==0){
        like++;
      }
    }
    return like;
  }

}
