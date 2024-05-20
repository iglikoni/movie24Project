import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieModel } from '../interface/movies.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MainService{

  url = 'http://localhost:4000/movies';
  movieM!:MovieModel
  constructor( private http:HttpClient) { }


  getMoviesData(){
    return this.http.get<MovieModel[]>(this.url)
  }

  getMoviesEditData(newEdit:any){
    return this.http.get<MovieModel>(this.url+'/',newEdit)
  }

  getMoviesDetailData(id:any){
    return this.http.get<MovieModel>(this.url+'/',id)
  }


  putNewMovie(addNewIput:any){
    return this.http.post<MovieModel[]>('http://localhost:4000/movies',addNewIput)
  }

  editMovie(newItem:any,id:any){
   return this.http.put<MovieModel>('http://localhost:4000/movies/',newItem,id);
  }

  deleteId(id:any){
   return this.http.delete<MovieModel>('http://localhost:4000/movies/' +id);
  }
  

  getAction(){
    return this.http.get<MovieModel[]>('http://localhost:4000/movies?category=action');
  }

  getAnime(){
    return this.http.get<MovieModel[]>('http://localhost:4000/movies?category=anime');
  }

  getBiography(){
    return this.http.get<MovieModel[]>('http://localhost:4000/movies?category=biography');
  }

  getDrama(){
    return this.http.get<MovieModel[]>('http://localhost:4000/movies?category=drama');
  }

  getUserInfo(){
    return this.http.get<any>('http://localhost:4000/SignUp')
  }

  PostUserInfo(signUpForm:NgForm){
    return this.http.post('http://localhost:4000/SignUp',signUpForm)
   }

}
