import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateStoryComponent } from './componentes/create-story/create-story.component';
import { StoryParentComponent } from './componentes/story-parent/story-parent.component';
import {HttpClientModule} from '@angular/common/http';
import { StoryListComponent } from './componentes/story-list/story-list.component';
import { ReactionsPipe } from './pipes/reactions.pipe';
import { RFavPipe } from './pipes/r-fav.pipe';
import { RHatePipe } from './pipes/r-hate.pipe';
import { UserdataComponent } from './componentes/userdata/userdata.component';
import { MyThingsParentComponent } from './componentes/my-things-parent/my-things-parent.component';
import { EditUserComponent } from './componentes/edit-user/edit-user.component';
import { EventParentComponent } from './componentes/event-parent/event-parent.component';
import { CreateEventComponent } from './componentes/create-event/create-event.component';
import { EventListComponent } from './componentes/event-list/event-list.component';
import { AssistancePipe } from './pipes/assistance.pipe';
import { TotalAssistPipe } from './pipes/total-assist.pipe';
import { ReturnNamePipe } from './pipes/return-name.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CreateStoryComponent,
    StoryParentComponent,
    StoryListComponent,
    ReactionsPipe,
    RFavPipe,
    RHatePipe,
    UserdataComponent,
    MyThingsParentComponent,
    EditUserComponent,
    EventParentComponent,
    CreateEventComponent,
    EventListComponent,
    AssistancePipe,
    TotalAssistPipe,
    ReturnNamePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
