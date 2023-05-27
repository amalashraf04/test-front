import { Component } from '@angular/core';

import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: any[] = [];

  
  constructor(private api:BackendService){}
  ngOnInit() {
    this.getData()
  }
  getData(){
    this.api.getUserData().subscribe((res: any) => {
      console.log("Incoming data:", res);
      this.user = res;
    });
  }
    
}
