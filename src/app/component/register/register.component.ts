import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerForm=new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl(''),
    gender:new FormControl(''),
    pass:new FormControl(''),
    repass:new FormControl(''),

  });

  RegisterFormSubmit(){
    console.log(this.registerForm.value);
    
  }

}
