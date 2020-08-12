import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/servicios/event/event.service';

@Component({
  selector: 'app-event-parent',
  templateUrl: './event-parent.component.html',
  styleUrls: ['./event-parent.component.scss']
})
export class EventParentComponent implements OnInit {

  
  event:Event;
 
  constructor() { }

  ngOnInit(): void {
  }

  

}
