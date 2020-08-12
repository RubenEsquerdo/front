import { Component, OnInit } from '@angular/core';
import {MiscolegasService} from 'src/app/miscolegas.service';
import {User} from 'src/app/user';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-miscolegas',
  templateUrl: './miscolegas.component.html',
  styleUrls: ['./miscolegas.component.scss']
})
export class MiscolegasComponent implements OnInit {

  constructor(private MiscolegasService: MiscolegasService) { }

  MyUsers: User[];


  ngOnInit(){
     
      this.MiscolegasService.getUserList()
      .subscribe((data: User[]) => this.MyUsers = data,
                error => console.error(error)
                
                
              );
}

  deleteFriendship(user : User): void{
    this.MyUsers = this.MyUsers.filter(u => u !== user);
    this.MiscolegasService.deleteFriendship(user).subscribe();
  }
  

  getUser(): void {
   
    this.MiscolegasService.getOnUser('id')
    .subscribe();
  }

  


}
