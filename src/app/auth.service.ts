import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user ={
    email:'admin@test.com',
    password:'password'
  }
  constructor() { }
  login(email: string, password: string) {
    if(this.user.email == email && this.user.password == password) {
      localStorage.setItem('currentuser', 'loggedin');
      return true;
    }
  }
  logout() {
    localStorage.removeItem('currentuser');
  }
}
