import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { Friendship } from './friendship';

@Injectable({
  providedIn: 'root'
})
export class MiscolegasService {

  private url = 'http://localhost:8080/users';


  constructor(private http: HttpClient) { }

  

  getUserList(){
  return this.http.get(this.url);
    
  }

  getOnUser(id: number | string) : Observable<User>{
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url)
  }


  deleteFriendship(user: User | number) : Observable<User>{
    const id = typeof user === 'number' ? user : user.id
    const url = `${this.url}/relationship/${id}`;

    return this.http.delete<User>(url)

  }


  searchUser(term: string): Observable<User[]>{
    
    if(!term.trim()){
      return of ([]);
    } 
    return this.http.get<User[]>(`${this.url}/?name=${term}`);
  }

  addfriendship(friendship : Friendship): Observable<Friendship>{
    return this.http.post<Friendship>(`${this.url}/inviteFriend`, friendship)
  }


}
