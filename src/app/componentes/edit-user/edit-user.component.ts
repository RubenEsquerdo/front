import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modelo/user.model';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user:User;
  updateUser: FormGroup;
  constructor(private _builder:FormBuilder, private userService: UserService) { 
    this.updateUser= this._builder.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      pass: ['', Validators.required],
      surname:['', Validators.required]
    })
  }
  ngOnInit(): void{
    this.userService.getUser().subscribe((data:User)=> this.user= data); 
  }
  updateUserData(values:any){
    let user=values;
    window.location.reload();
    this.userService.updateUserData(user).subscribe();
  }

}
