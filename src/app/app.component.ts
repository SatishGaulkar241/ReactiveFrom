import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_8';
  public userData:any={};
  public toggle:boolean=true;
  public todoListval:any[]=[];
  public Data:number=10;
  public binddata:any;
  public parentData:string='Angular Parent Data';
  public variable:any;
  public userDetails=[
    {name:'Satish',email:'satishgaulkar2@gmail.com',phone:25342524},
    {name:'Raja',email:'sgaulkar5335@gmail.com',phone:5234545},
    {name:'Sawant',email:'sawant2@gmail.com',phone:34346456}
  ]


  toggles(){
    this.toggle=!this.toggle;
  }
  getBoxVal(item:any){
    this.variable=item;   
  }

  updateData(){
    this.Data=Math.floor(Math.random()*100)
    // this.Data=30;
  }
  todoList(items:any){
    this.todoListval.push({id:this.todoListval.length,name:items})
    console.log(items);    
  }
  removeItems(id:any){
    this.todoListval=this.todoListval.filter(items=>items.id!==id)

  }


  getData(data:NgForm){
    console.log(data);
    this.userData=data;    
  }
}
