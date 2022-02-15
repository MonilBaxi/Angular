import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login=new FormGroup({
    user:new FormControl('monil'),
    password:new FormControl('123')
  })
  submitData(){
    console.log(this.login.value);
  }
}
