import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/services/interface/movies.model';
import { MainService } from 'src/app/services/services/main-service.service';

@Component({
  selector: 'app-anime-movies',
  templateUrl: './anime-movies.component.html',
  styleUrls: ['./anime-movies.component.css']
})
export class AnimeMoviesComponent implements OnInit {
  movies:MovieModel[]=[]
  constructor(
    private mainService:MainService
  ){}
  ngOnInit(): void {
    this.getAnimeMovies()
  }

  getAnimeMovies(){
    this.mainService.getAnime().subscribe(data=>{
      this.movies = data
    })
  }

}
