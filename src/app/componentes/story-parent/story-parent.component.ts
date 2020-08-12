import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/modelo/story.model';
import { StoryService } from 'src/app/servicios/story/story.service';

@Component({
  selector: 'app-story-parent',
  templateUrl: './story-parent.component.html',
  styleUrls: ['./story-parent.component.scss']
})
export class StoryParentComponent implements OnInit {

  stories:Story[];
  story:Story;
  activated=false;
  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    
  }

  
}
