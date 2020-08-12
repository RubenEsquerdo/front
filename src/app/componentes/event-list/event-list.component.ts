import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/servicios/event/event.service';
import { Assistance } from 'src/app/modelo/assistance.model';
import { User } from 'src/app/modelo/user.model';
import { Event } from 'src/app/modelo/event.model';
import { UserService } from 'src/app/servicios/user/user.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @Input()
  events:Array<Event>;
  userEvents:Array<Event>;
  userData:User;
  assistanceEvents:number;
  state:boolean=false;
  constructor(private eventService: EventService, private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data:User)=> this.userData= data);
    this.eventService.getItemList()
      .subscribe((data:Array<Event>)=> this.events= data,
      error=> console.error),
      ()=>console.log('My item list is loaded!');
    this.eventService.getUserAssistance().subscribe((data:Array<Event>)=> this.userEvents= data);
    this.eventService.getUserAssistance().subscribe((data:Array<Event>)=> this.assistanceEvents= data.length);
  }
  
  
  assistEvent(event:any){
      let inf=[];
      inf.push(event.id);
      inf.push(this.userData.id);
      console.log(this.getState(event));
    if(this.getState(event)){
      this.eventService.deleteItem(inf).subscribe();
      window.location.reload();
    }else{
      this.eventService.updateItem(inf).subscribe();
      window.location.reload();
    }
  }

  getState(event:Event):boolean{
    this.state=false
    for (let i= 0; i < this.userEvents?.length; i++){
      if(this.userEvents[i].id==event.id){
         this.state=true;
      }
    }
    return this.state;
  }

}
