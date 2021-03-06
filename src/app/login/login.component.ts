import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


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
    emailid: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(4)]]
  });
  showMsg: string = '';
  get emailid() {
    return this.loginForm.get('emailid');
  }
  get password() {
    return this.loginForm.get('password');
  }
  adminLogin() {
    console.log(this.loginForm.value);
    if (
      this.authservice.login(
        this.loginForm.value.emailid,
        this.loginForm.value.password
      )
    ) {
      console.log('success');
      this._router.navigate(['../items/view-items']);
    } else {
      this._router.navigate(['login']);
      this.showMsg = 'invalid email or password';
    }
  }

}



//emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'