import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User } from 'src/app/modelo/user.model';
import { UserService } from 'src/app/servicios/user/user.service';
import { EventService } from 'src/app/servicios/event/event.service';
import { Event } from 'src/app/modelo/event.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  userData:User;
  events:Event[];
  
  createEvent: FormGroup;
  constructor(private _builder:FormBuilder,private userService: UserService, private eventService: EventService) {
    this.createEvent= this._builder.group({
      description:['',Validators.required],
      eventDate:['',Validators.required],
      name:['',Validators.required],
       
    })
   }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data:User)=> this.userData=data); 
    
  }

  addEvent(){
    let event:Event;
    let formulario = document.forms['formulario'];
    let desc = formulario['desc'].value;
    let date = formulario['date'].value;
    let name = formulario['name'].value;
    event={
      id:0,
      description:desc,
      name:name,
      user:this.userData,
      eventDate: date,
      state:2,
      assistances:[]
    } 
    window.location.reload();
    this.eventService.addEvent(event).subscribe(event=>this.events?.push(event));
  }
}
