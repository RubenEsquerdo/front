import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryParentComponent, MyThingsParentComponent, EventParentComponent} from './componentes/index';


const routes: Routes = [
  {path:'myStories', component: StoryParentComponent},
  {path:'myThings', component: MyThingsParentComponent},
  {path:'events', component:  EventParentComponent},
  {path:'', redirectTo: 'myStories',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
