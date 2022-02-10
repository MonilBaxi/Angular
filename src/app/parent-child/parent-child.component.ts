import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  constructor() { }
  name:string="monil";
  ngOnInit(): void {
  }
  surname:string="";
  callParent(item:any){
    this.surname=item;
  }

}
