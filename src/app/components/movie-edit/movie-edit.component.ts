import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from 'src/app/services/interface/movies.model';
import { MainService } from 'src/app/services/services/main-service.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  moviech!: MovieModel;
  editMovie!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.http.get<MovieModel>('http://localhost:4000/movies/' + id).subscribe(value => {
      this.moviech = value;
      this.editMovie = new FormGroup({
        name: new FormControl(this.moviech.name),
        description: new FormControl(this.moviech.description),
        image: new FormControl(this.moviech.image),


      });
      this.isLoading = true;
    });
  }

  postEdit(): void {
    this.http.put('http://localhost:4000/movies/' + this.moviech.id, this.editMovie.value).subscribe(value => {
      console.log(value);
      alert('Changes have been made');
      this.router.navigate(['home']);
    });
  }
}
