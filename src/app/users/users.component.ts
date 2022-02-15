import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userId:any;
  constructor(private route :ActivatedRoute) { 
    this.userId=route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    
  }

}
