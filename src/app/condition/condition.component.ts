import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show:boolean=true;
  tell:string="red";
}
