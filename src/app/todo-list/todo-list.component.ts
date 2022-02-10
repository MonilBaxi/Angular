import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list:any[]=[];
  
  addItem(item:any){
    this.list.push(item);
    
  }
  removeItem(idx:any){
    this.list.splice(idx,1);
  }

}
