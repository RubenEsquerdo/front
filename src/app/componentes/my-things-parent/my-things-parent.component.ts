import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/modelo/story.model';
import { StoryService } from 'src/app/servicios/story/story.service';
import { UserService } from 'src/app/servicios/user/user.service';
import { User } from 'src/app/modelo/user.model';

@Component({
  selector: 'app-my-things-parent',
  templateUrl: './my-things-parent.component.html',
  styleUrls: ['./my-things-parent.component.scss']
})
export class MyThingsParentComponent implements OnInit {
  
  
  stories:Story[];
  userData:User;
  activated=true;
  constructor(private storyService: StoryService,private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data:User)=> this.userData= data);
    this.storyService.getItemList()
      .subscribe((data:Story[])=> this.stories= data,
      error=> console.error),
      ()=>console.log('My item list is loaded!');
      
  }

  
}
