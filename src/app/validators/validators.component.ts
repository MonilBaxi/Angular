import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName ,Validators} from '@angular/forms';
@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(5)])
  })
  Data(){
    console.log(this.login.value);
  }
  get user(){
    return this.login.get('user');

  }
  get password(){
    return this.login.get('password');
  }
}
