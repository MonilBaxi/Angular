import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url="http://localhost:7000/json";
  
  constructor(private http : HttpClient) { 
   
  }
  user(){
    console.log(this.http.get(this.url));
    return this.http.get(this.url);
  }
  sendD(item:any){
    return this.http.post(this.url,item);
  }
  data = [
    {
      name:"monil",
      surname:"baxi"
    },
    {
      name:"Peter",
      surname:"Parker"
    },
    {
      name:"Michael",
      surname:"Jorden"
    }
  ]
}
