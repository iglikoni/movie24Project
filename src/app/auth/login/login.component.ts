import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/services/main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup


  constructor(
    private mainService: MainService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6)])
    })

  }

  getUser() {
    this.mainService.getUserInfo().subscribe(res=>{
     const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
     });
     if(user){ 
      this.loginForm.reset()
      this.router.navigate(['/home'])

     }else{
      alert('User not found')
      this.loginForm.reset()
     }
    })

  }

}



