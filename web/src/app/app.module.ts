import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {LoginComponent} from './components/login/login.component';
import {SearchComponent} from './components/search/search.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CreatePostComponent} from './components/create-post/create-post.component';
import {ViewPostComponent} from './components/view-post/view-post.component';
import {RespondPostComponent} from './components/respond-post/respond-post.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    CreatePostComponent,
    ViewPostComponent,
    RespondPostComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdi36DnJlcWtZyQVWQ0z9EJThIJquoYFI'
    }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
