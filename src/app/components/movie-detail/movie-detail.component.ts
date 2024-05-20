import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/services/interface/movies.model';
import { MainService } from 'src/app/services/services/main-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie!: MovieModel
  isLoading: boolean = false;
  constructor(private route: ActivatedRoute, private mainService: MainService,
    private http: HttpClient
  ) {

  }
  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.http.get<MovieModel>('http://localhost:4000/movies' + '/' + id).subscribe((value: MovieModel) => {
      this.movie = value;
      console.log(value)
      this.isLoading = true
    })
  }

}
