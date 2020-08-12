import { Pipe, PipeTransform } from '@angular/core';
import {Reaction} from '../modelo/reaction.model';

@Pipe({
  name: 'rHate'
})
export class RHatePipe implements PipeTransform {

  transform(value: Reaction[]): number{
    let dislike=0;
    for (let i= 0; i < value.length; i++) {
      if(value[i].reactionType==2){
        dislike++;
      }
    }
    return dislike;
  }

}
