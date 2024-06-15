import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
public formData:any={};
public formval:any={};


  constructor() { }

  ngOnInit(): void {
  }
  public formSubmited(){
    console.log("form Submited", this.formData);   
  }
  public submitFormfirst(){
    console.log("form submitted succesfully....");    
  }
  public getFormValue(data:NgForm){
    console.log(data);   
    this.formval=data;
  }

}
