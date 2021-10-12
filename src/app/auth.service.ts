import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user ={
    username:'admin',
    password:'password'
  }
  constructor() { }
  login(username: string, password: string) {
    if(this.user.username == username && this.user.password == password) {
      localStorage.setItem('currentuser', 'loggedin');
      return true;
    }
  }
  logout() {
    localStorage.removeItem('currentuser');
  }
}
