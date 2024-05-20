import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddNewMovieComponent } from './components/add-new-movie/add-new-movie.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ActionMoviesComponent } from './components/category/action-movies/action-movies.component';
import { AnimeMoviesComponent } from './components/category/anime-movies/anime-movies.component';
import { DramaMoviesComponent } from './components/category/drama-movies/drama-movies.component';
import { BiographyMoviesComponent } from './components/category/biography-movies/biography-movies.component';
import { LoginComponent } from './auth/login/login.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignInComponent},
  {path:'home',component:HomeComponent},
  {path:'home/addNewMovie',component:AddNewMovieComponent},
  {path:'home/edit/:id',component:MovieEditComponent},
  {path:'home/detail/:id',component:MovieDetailComponent},
  {path:'actionC',component:ActionMoviesComponent},
  {path:'animeC',component:AnimeMoviesComponent},
  {path:'dramaC',component:DramaMoviesComponent},
  {path:'biographyC',component:BiographyMoviesComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
