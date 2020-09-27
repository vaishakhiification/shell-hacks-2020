import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SearchComponent} from "./components/search/search.component";
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { RespondPostComponent } from './components/respond-post/respond-post.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'createpost', component: CreatePostComponent},
  {path: 'viewpost', component: ViewPostComponent},
  {path: 'respondpost', component: RespondPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
