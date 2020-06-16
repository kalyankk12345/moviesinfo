import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { MoviesdetailComponent } from './movies/moviesdetail/moviesdetail.component';
import { MoviesdetailGuard } from './movies/moviesdetail.guard';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'movies',component:MoviesComponent},
      {path:'movies/:id',
      canActivate:[MoviesdetailGuard],
      component:MoviesdetailComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
    ]),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
