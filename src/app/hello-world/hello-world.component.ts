//ng install -g @angular/cli
//ng add new_project
//cd new_project
//ng serve --open
//ng g c new_component
//ng g p new_pipe
//ng g directive new_directive
//ng g c new_inline_style_component --inline-style --inline-template
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
