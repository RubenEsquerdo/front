import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Event } from 'src/app/modelo/event.model';
import { User } from 'src/app/modelo/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  }
  constructor(private http:HttpClient) { }

  getItemList(){
    const url=`${environment.URL_BASE}/events`;
    return this.http.get(url, this.httpOptions);
  }
  getUserEvent(){
    const url=`${environment.URL_BASE}/events/user/${10}`;
    return this.http.get<number>(url, this.httpOptions);
  }
  getUserAssistance(){
    const url=`${environment.URL_BASE}/events/user/${10}/yesAssistance`;
    return this.http.get(url, this.httpOptions);
  }

  

  addEvent(event:Event){
    console.log(event.name);
    const url=`${environment.URL_BASE}/events`;
    return this.http.post<Event>(url, event, this.httpOptions);
  }

  updateItem(inf:Array<String>): Observable<Array<String>>{
    const url=`${environment.URL_BASE}/events/${inf[0]}/yesAssistance`;
    return this.http.post<Array<String>>(url,inf, this.httpOptions);
  }

  deleteItem(inf:Array<String>):Observable<Array<String>>{
    const url=`${environment.URL_BASE}/events/${inf[0]}/notAssistance`;
    return this.http.post<Array<String>>(url,inf, this.httpOptions);
  }
}
