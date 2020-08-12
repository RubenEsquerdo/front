import { Pipe, PipeTransform } from '@angular/core';
import {Reaction} from '../modelo/reaction.model';
import { ConstantPool } from '@angular/compiler';
@Pipe({
  name: 'rFav'
})
export class RFavPipe implements PipeTransform {

  transform(value: Reaction[]): number{
    let fav=0;
    
    for (let i= 0; i < value.length; i++){
      if(value[i].reactionType==1){
        fav++; 
      }
    }
    return fav;
  }

}
