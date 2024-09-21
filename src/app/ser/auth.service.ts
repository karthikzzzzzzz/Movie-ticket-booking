import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private validEmail: string = 'abc@gmail.com'; // Change this to your required email

  constructor(private router: Router) {}

  login(uname: string, email: string, pword: string) {
    // Check for the specific username, email, and password
    if (uname === 'karthik' && email === this.validEmail && pword === '1234') {
      return 200; // Success
    } else {
      return 403; // Unauthorized
    }
  }

  logout() {
    this.router.navigate(['login']);
  }
}
