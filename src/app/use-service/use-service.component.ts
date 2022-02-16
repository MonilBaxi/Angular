import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../services/user-data.service';
@Component({
  selector: 'app-use-service',
  templateUrl: './use-service.component.html',
  styleUrls: ['./use-service.component.css']
})
export class UseServiceComponent implements OnInit {
  users:any;
  data={name:"peter",surname:"parker"};
  constructor(private userDATA : UserDataService) { 
     userDATA.user().subscribe((data)=>{this.users=data});
  }
  sendData(){
    this.userDATA.sendD(this.data).subscribe((result)=>{
      console.log(result);
    });
  }
  ngOnInit(): void {
  }

}
