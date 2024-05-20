import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/services/main-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signUpForm!:FormGroup;
  
  constructor(
    private mainService:MainService,
    private router:Router){}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'email': new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('',[Validators.required,Validators.minLength(6)]),
      
    })
  }

  postNewUser(){
    this.mainService.PostUserInfo(this.signUpForm.value).subscribe(data=>{
      this.signUpForm.reset();
      console.log(data);
      alert('You added succesfully');
      this.router.navigate(['login'])
    
    })
   
  }

}
