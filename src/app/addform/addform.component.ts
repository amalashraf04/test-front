import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {
  constructor(private router:Router,private fb:FormBuilder,private api:BackendService,private http: HttpClient){}
 
  addUserForm = this.fb.group(
    {
      name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    

    })
    adddata(){
      let user = this.addUserForm.value
      
      this.api.addUser(user).subscribe(
        (res: any) => {
        console.log(res)
        this.router.navigate(['/add-otp'])
    }
      )}

}
