import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

import { HttpClientModule } from '@angular/common/http';
import { JsonpModule, Jsonp, Response } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MycatComponent } from './mycat/mycat.component';

/* Firebase Stuff */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'; // RealTimeDB
import { AngularFirestoreModule } from 'angularfire2/firestore'; // Firestore
import { environment } from '../environments/environment';

/* Angular Material Modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { AskMeAnythingComponent } from './ask-me-anything/ask-me-anything.component';

/* Angular Forms */
import { FormsModule } from '@angular/forms';

/* Chat Module */
import { ChatModule } from './chat/chat.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'mycat', component: MycatComponent },
  { path: 'ask-me-anything', component: AskMeAnythingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    AboutmeComponent,
    MycatComponent,
    AskMeAnythingComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    BrowserModule,
    HttpClientModule,
    JsonpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatInputModule, FormsModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
