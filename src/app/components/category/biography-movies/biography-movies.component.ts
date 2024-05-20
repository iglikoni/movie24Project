import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/services/interface/movies.model';
import { MainService } from 'src/app/services/services/main-service.service';

@Component({
  selector: 'app-biography-movies',
  templateUrl: './biography-movies.component.html',
  styleUrls: ['./biography-movies.component.css']
})
export class BiographyMoviesComponent implements OnInit {
  movies:MovieModel[]=[]

  constructor( 
    private mainService:MainService
  ) { }

  ngOnInit(): void {
    this.getBiographyMovies()
  }

  getBiographyMovies(){
    this.mainService.getBiography().subscribe(data=>{
      this.movies = data;
    })
  }

}
