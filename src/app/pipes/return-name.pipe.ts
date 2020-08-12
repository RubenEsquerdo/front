import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '@angular/router';

@Pipe({
  name: 'returnName'
})
export class ReturnNamePipe implements PipeTransform {

  cont:number=0;
  transform(value:Array<Event>) :number{
    for (let i= 0; i < value?.length; i++){
      if(value[i]){
        this.cont++;
      
      }
    }

    return this.cont;
 
  }

}
