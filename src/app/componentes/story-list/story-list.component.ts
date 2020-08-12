import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoryService } from 'src/app/servicios/story/story.service';
import { UserService } from 'src/app/servicios/user/user.service';
import { Story } from 'src/app/modelo/story.model';
import { Reaction } from 'src/app/modelo/reaction.model';
import { User } from 'src/app/modelo/user.model';
import { ReactionService } from 'src/app/servicios/reaction/reaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {

  stories:Array<Story>;
  userStories:Array<Story>;
  userData:User;
  state:boolean=false;
  @Input()
  activated:boolean;
  
  constructor(private storyService: StoryService,
    private userService: UserService, private reactionService:ReactionService) { 
    
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data:User)=> this.userData= data);
    
    if(!this.activated){
      this.storyService.getItemList()
      .subscribe((data:Array<Story>)=> this.stories= data,
      error=> console.error),
      ()=>console.log('My item list is loaded!');
      this.storyService.getUserStories().subscribe((data:Array<Story>)=> this.userStories= data);
    }else{
      this.storyService.getUserStories()
      .subscribe((data:Array<Story>)=> this.stories= data,
      error=> console.error),
      ()=>console.log('My item list is loaded!');
    }
    
  }

  addReaction(story:Story,n:number){
    let item:Reaction;
    item={
      id:0,
      story:story,
      reactionType:n
    }
    if(!this.getState(story)){
      story.reactions.push(item);
      this.reactionService.addReaction(item).subscribe();
      window.location.reload();
    }
  }
  getState(story:Story):boolean{
    this.state=false
    for (let i= 0; i < this.userStories.length; i++){
      if(this.userStories[i].id==story.id){
         this.state=true;
      }
    }
    return this.state;
  }
  


}
