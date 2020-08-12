import { Pipe, PipeTransform } from '@angular/core';
import { Assistance } from '../modelo/assistance.model';

@Pipe({
  name: 'totalAssist'
})
export class TotalAssistPipe implements PipeTransform {

  cont:number=0;
  transform(value:Array<Assistance>) :number{
    for (let i= 0; i < value?.length; i++){
      if(value[i].state==true){
        this.cont++;
       
      }
    }

    return this.cont;
 
  }

}
