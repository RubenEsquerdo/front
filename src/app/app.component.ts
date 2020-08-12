import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GRUPOC';

  constructor(private router:Router){

  }

  goToThings(){
    this.router.navigate(['/myThings']);
  }
  goToStories(){
    this.router.navigate(['/myStories']);
  }
  goToEvents(){
    this.router.navigate(['/events']);
  }

}
