import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/services/interface/movies.model';
import { MainService } from 'src/app/services/services/main-service.service';

@Component({
  selector: 'app-action-movies',
  templateUrl: './action-movies.component.html',
  styleUrls: ['./action-movies.component.css']
})
export class ActionMoviesComponent implements OnInit {
  movies:MovieModel[]=[]

  constructor(
    private mainService:MainService,
   
  ){}


  ngOnInit(): void {
    this.getActionMovies()
  }


  getActionMovies(){
    this.mainService.getAction().subscribe(data=>{
      this.movies = data
      console.log(data)
    })
  }


}
