import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user/user.service';
import { StoryService } from 'src/app/servicios/story/story.service';
import { User } from 'src/app/modelo/user.model';
import { Story } from 'src/app/modelo/story.model';
import { EventService } from 'src/app/servicios/event/event.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {

  userData:User;
  number:number;
  nEvents:number;
  
  constructor(private userService:UserService, private storyService:StoryService, private eventService:EventService){ 
      
    }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data:User)=> this.userData= data);
    this.storyService.getUserStories().subscribe((data:Story[])=> this.number= data.length);
    this.eventService.getUserEvent().subscribe((data:number)=>this.nEvents=data);
  }

}
