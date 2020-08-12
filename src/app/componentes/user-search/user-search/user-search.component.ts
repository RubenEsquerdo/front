import { Component, OnInit } from '@angular/core';
import { MiscolegasService } from 'src/app/miscolegas.service';
import { Subject, Observable } from 'rxjs';
import { User } from 'src/app/user';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  User: Observable<User[]>;

  constructor(private MiscolegasService: MiscolegasService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.User = this.searchTerms.pipe(

      debounceTime(200),

      distinctUntilChanged(),

      switchMap((term: string) => this.MiscolegasService.searchUser(term))


    );
  }

}
