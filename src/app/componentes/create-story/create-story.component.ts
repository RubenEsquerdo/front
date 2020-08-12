import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../servicios/story/story.service'
import { Story } from 'src/app/modelo/story.model';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/servicios/user/user.service';
import { User } from 'src/app/modelo/user.model';


@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss']
})
export class CreateStoryComponent implements OnInit {

  messages:Story[]=[];
  userData:User;
  createStory: FormGroup;
  constructor(private storyService:StoryService,private _builder:FormBuilder,private userService: UserService) {
    this.createStory= this._builder.group({
      content: ['',Validators.required],
      publishDate:[this.getDate],
      reactions:[[]]
    })
     
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data:User)=> this.userData= data); 
  }
  
  addstory(){
    let item:Story;
    let formulario = document.forms['formulario'];
    let campo = formulario['campo'].value;
    item={
      id:0,
      content:campo,
      publishDate: this.getDate(),
      reactions:[]
    }
    window.location.reload();
    this.storyService.addItem(item)
    .subscribe(item=>this.messages.push(item));
  }
 
  getDate():string{
    let fecha = new Date();
    let mes = fecha.getMonth()+1;
    let dia = fecha.getDate(); 
    let ano = fecha.getFullYear();
    let mess:string;
    let dias:string;
    if(dia<10)
      dias='0'+dia; 
    if(mes<10)
      mess='0'+mes;
    return ano+"/"+mes+"/"+dia;
  }
}
