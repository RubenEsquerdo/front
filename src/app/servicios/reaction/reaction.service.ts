import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Reaction } from 'src/app/modelo/reaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  }
  constructor(private http:HttpClient) { }

  addReaction(reaction:Reaction): Observable<Reaction>{
    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, reaction:Reaction) => {
        if (typeof reaction === "object" && reaction !== null) {
          if (seen.has(reaction)) {
            return;
          }
          seen.add(reaction);
          
        }
        return reaction;
      };
    };
    let st:Reaction=JSON.parse(JSON.stringify(reaction, getCircularReplacer()));
    console.log(st.story.id);
    const url=`${environment.URL_BASE}/messages/${st.story.id}/reactions`;
    return this.http.post<Reaction>(url, st,this.httpOptions);
  }
}
