import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item=0;
  @Input() parentItem:any;
  @Input() items:{name:string,email:string,phone:any}={name:'',email:'',phone: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
