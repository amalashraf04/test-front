import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  // api='http://localhost:2341/api'

  api:String = `api`

  addUser(user:any){
    return this.http.post(`${this.api}`,user)
  }
  
  getUserData(){
    return this.http.get(`${this.api}`)
  }
}
