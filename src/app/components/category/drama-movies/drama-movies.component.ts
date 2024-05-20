import { Component } from '@angular/core';
import { MovieModel } from 'src/app/services/interface/movies.model';
import { MainService } from 'src/app/services/services/main-service.service';

@Component({
  selector: 'app-drama-movies',
  templateUrl: './drama-movies.component.html',
  styleUrls: ['./drama-movies.component.css']
})
export class DramaMoviesComponent {

  movies:MovieModel[]=[]

  constructor( 
    private mainService:MainService
  ) { }

  ngOnInit(): void {
    this.getDramaMovies()
  }

  getDramaMovies(){
    this.mainService.getDrama().subscribe(data=>{
      this.movies = data;
    })
  }

}
