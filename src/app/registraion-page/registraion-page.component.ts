import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registraion-page',
  templateUrl: './registraion-page.component.html',
  styleUrls: ['./registraion-page.component.scss']
})
export class RegistraionPageComponent {

registrationForm:any = FormGroup
firstName: any = '';
lastName: any = '';
email: any = '';
dob: any = '';
mobilenumber: any = '';
password: any = '';
username: any = '';

constructor(private formbuilder:FormBuilder,private userservice:UserService ){
 this.createForm()
}
createForm() {
  this.registrationForm = this.formbuilder.group({
    username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      mobileNumber: ['', Validators.required]

  });    
}

onRegistrationFormSubmit(){
  this.userservice.addUsers(this.registrationForm.value).subscribe((res:any)=>{
    alert("Registration Successful")
    console.log(res,'test');
    
  },(err:any)=>{
    console.log(err);
    
  })
}

}

