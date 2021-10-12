import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _router: Router,
    private authservice: AuthService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });
  adminLogin() {
    console.log(this.loginForm.value);
    if (
      this.authservice.login(
        this.loginForm.value.username,
        this.loginForm.value.password
      )
    ) {
      console.log('success');
      this._router.navigate(['../items/view-items']);
    } else {
      this._router.navigate(['']);
    }
  }

}
