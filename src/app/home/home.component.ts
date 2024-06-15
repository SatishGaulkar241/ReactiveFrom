import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name="Satish Raja"
  public formval:any={};
  @Input() item=0;
  constructor() { }

  ngOnInit(): void {
  }
  Submit(){
    alert("Submited Successfully......")
  }
  FormSubmitted(){
    console.log("Form Submited", this.formval);  
  }

  getfunData(){
    return "This is function Data.."
  }

}
