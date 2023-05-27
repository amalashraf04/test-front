import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.css']
})
export class OtpformComponent {
  addotp!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addotp = this.fb.group({
      otp: ['', Validators.required],
      name: ['', Validators.required]
    });
  }


}
