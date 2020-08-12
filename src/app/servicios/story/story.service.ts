import { Injectable } from '@angular/core';
import { Story } from 'src/app/modelo/story.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoryService {

  story:Story;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  }
  constructor(private http:HttpClient) { }

  getItemList(){
    const url=`${environment.URL_BASE}/messages`;
    return this.http.get(url, this.httpOptions);
  }
  getEventsNames(){
    const url=`${environment.URL_BASE}/messages/userName`;
    return this.http.get(url, this.httpOptions);
  }
  
  
  addItem(message:Story){

    const url=`${environment.URL_BASE}/messages`;
    return this.http.post<Story>(url, message, this.httpOptions);
  }
  getUserStories(){
    const url=`${environment.URL_BASE}/messages/user/${10}`;
    return this.http.get(url, this.httpOptions);
  }

  updateItem(story:Story): Observable<Story>{
    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, value:Story) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
         
        }
        return value;
      };
    };
    let st:Story=JSON.parse(JSON.stringify(story, getCircularReplacer()));
    const url=`${environment.URL_BASE}/messages`;
    
    return this.http.post<Story>(url,st, this.httpOptions);
  }
}
