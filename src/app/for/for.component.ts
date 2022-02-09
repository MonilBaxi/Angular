import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items=['milk','butter','panner','curd','cheese']
  userData=[
    {
      name:"monil",
      age:21
    },
    {
      name:"manish",
      age:22
    },
    {
      name:"malav",
      age:12
    },
  ]
}
