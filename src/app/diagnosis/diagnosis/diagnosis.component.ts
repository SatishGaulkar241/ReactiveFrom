import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  public displayval:any;
  public dislayBoxData:any;
  public count=0;
  public inputvalue:any;
  public name='Satish';
  public isVisible=true;
  public show=true;
  public color='xyz';
  public user=['A','B','C','D','E','F'];
  public userDetails=[
    {name:'A',email:'a@gmail.com',phone:3538475,account:['youtube','fb','insta','Google']},
    {name:'B',email:'b@gmail.com',phone:3523453,account:['youtube','fb','insta','Google']},
    {name:'C',email:'c@gmail.com',phone:3255345,account:['youtube','fb','insta','Google']},
    {name:'D',email:'d@gmail.com',phone:3224234,account:['youtube','fb','insta','Google']}
  ]

  constructor() { }
toggle(){
  this.isVisible=!this.isVisible;
}
  ngOnInit(): void {
  }
  public colorChangeRed(){
    this.color='red';    
  }
  public colorChangeBlue(){
    this.color='blue';
  }
hideifalse(){
  this.show=!this.show;
}

  getboxData(box1:any){
    this.dislayBoxData=box1;
  }
  getValue(val:any){
    console.log(val);    
  }
  getBoxValue(val:any){
    this.displayval=val
  }
  getSubmit(firstVal:any,SecondVal:any){
    alert(firstVal);
    alert(SecondVal);
  }

  public getcounter(val:any){
    val==='add'? this.count++ : this.count--;
  }
  getinputval(val:any){
    this.inputvalue=val;
  }
}
