import { Component, OnInit } from '@angular/core';
import {MiscolegasService} from 'src/app/miscolegas.service';
import {User} from 'src/app/user';
import { Friendship } from 'src/app/friendship';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  



  constructor(private MiscolegasService: MiscolegasService) { }

  ngOnInit(): void {
  }

  createFriendship(): void{
    this.MiscolegasService.addfriendship(Friendship).subscribe()
  }



}
