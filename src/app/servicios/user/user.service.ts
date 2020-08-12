import { Injectable } from '@angular/core';
import { User } from 'src/app/modelo/user.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  }
  constructor(private http:HttpClient) { }

  getUser(){
    const url=`${environment.URL_BASE}/users/fullUser/${10}`;
     return this.http.get(url, this.httpOptions); 
  }

  updateUserData(user:User): Observable<User>{
    const url=`${environment.URL_BASE}/users`;
    console.log(user);
    return this.http.put<User>(url,user, this.httpOptions);
  }
  

}
