import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../modelo/event.model';

@Pipe({
  name: 'assistance'
})
export class AssistancePipe implements PipeTransform {

  res:string;
  transform(id:number, value:Array<Event>) :string {
    this.res='Assist';
    for (let i= 0; i < value?.length; i++){
      if(value[i].id==id){
        this.res='Dismiss';
      }
    }

    return this.res;
 
  }
  

}
