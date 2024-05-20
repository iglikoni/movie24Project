import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/services/main-service.service';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.css']
})
export class AddNewMovieComponent implements OnInit {

  addNewIput!: FormGroup


  constructor( private mainService:MainService,private router:Router) { }

  ngOnInit(): void {
  
    this.addNewIput = new FormGroup({
      name:new FormControl(''),
      description:new FormControl(''),
      category:new FormControl(''),
      image:new FormControl(''),


    })
  }


  addNewMovie(){
    
    this.mainService.putNewMovie(this.addNewIput.value).subscribe(data=>{
      alert('Movie addet successfully')
      this.addNewIput.reset()
     
      console.log(data)
    })
  }
  


}
