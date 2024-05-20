import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewMovieComponent } from './components/add-new-movie/add-new-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { PipePipe } from './services/pipes/pipe.pipe';
import { ActionMoviesComponent } from './components/category/action-movies/action-movies.component';
import { AnimeMoviesComponent } from './components/category/anime-movies/anime-movies.component';
import { DramaMoviesComponent } from './components/category/drama-movies/drama-movies.component';
import { BiographyMoviesComponent } from './components/category/biography-movies/biography-movies.component';
import { LoginComponent } from './auth/login/login.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ShortenPipePipe } from './services/pipes/shorten-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AddNewMovieComponent,
    MovieEditComponent,
    MovieDetailComponent,
    PipePipe,
    ActionMoviesComponent,
    AnimeMoviesComponent,
    DramaMoviesComponent,
    BiographyMoviesComponent,
    LoginComponent,
    SignInComponent,
    ShortenPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
