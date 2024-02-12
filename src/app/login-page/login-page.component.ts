import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: any = FormGroup;
username: any;
email: any;
password: any;
  userdetail: any;
  constructor(private formbuilder:FormBuilder,private userservice:UserService){
    this.createForm()
   }
   createForm() {
     this.loginForm = this.formbuilder.group({
       username: ['', Validators.required],
         password: ['', Validators.required],
         email: ['', Validators.required],
   
     });    
   }

   onLoginFormSubmit(){
    if(this.loginForm.Valid){
      this.addUsers(this.)
    }
    this.userservice.loginUser(this.loginForm.value).subscribe((res)=>{
      this.userdetail=res;
      alert('Login SuccessFul')
    },(err)=>{
      console.log(err);
      alert("Give Valid User Detail")
      
    })
   }
}
