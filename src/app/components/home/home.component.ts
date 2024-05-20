import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from 'src/app/services/interface/movies.model';
import { MainService, } from 'src/app/services/services/main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies!: MovieModel[]
  filterMovies: string = ''
  currentPage = 1;
  itemsPerPage = 5;


  constructor(
    private mainService: MainService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this.mainService.getMoviesData().subscribe(data => {
      this.movies = data
    })
  }


  editMovie(movie: MovieModel) {
    this.router.navigate(['edit', movie.id], { relativeTo: this.route }).then()
  }

  deleteMovie(id: any) {
    this.mainService.deleteId(id).subscribe(value => {
      console.log(value)
      this.getMovies()
    })
  }


  movieDetail(movie: MovieModel) {
    this.router.navigate(['detail', movie.id], { relativeTo: this.route })
  }

  paginate() {
    let params = new HttpParams();
    params = params.append('_page', this.currentPage)
    params = params.append('_per_page', this.itemsPerPage)
    this.http.get<any>('http://localhost:4000/movies', {
      params: params
    }).subscribe(data => {
      this.movies = data.data;
    })

  }

  backward() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  forward() {
    this.currentPage++;
    this.paginate();
  }


}
