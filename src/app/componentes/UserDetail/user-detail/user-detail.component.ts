import { Component, OnInit } from '@angular/core';
import {MiscolegasService} from 'src/app/miscolegas.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private MiscolegasService: MiscolegasService) { }

  ngOnInit(): void {
  }


  getUser(): void {
   
    this.MiscolegasService.getOnUser('id')
    .subscribe();
  }
}
