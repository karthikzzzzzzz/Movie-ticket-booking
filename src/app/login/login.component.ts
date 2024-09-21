import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { Router } from '@angular/router';
import { AuthService } from '../ser/auth.service'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = "";
  email: string = "";
  password: string = "";
  errorMsg: string = "";

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!this.email.trim()) {
      this.errorMsg = "Email is required";
    } else if (!emailPattern.test(this.email)) {
      this.errorMsg = "Please enter a valid email address";
    } else if (!this.username.trim()) {
      this.errorMsg = "Username is required";
    } else if (!this.password.trim()) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      const res = this.auth.login(this.username, this.email, this.password); // Pass the email here
      if (res === 200) {
        this.router.navigate(['home']);
      } else if (res === 403) {
        this.errorMsg = "Invalid login credentials";
      }
    }
  }
}
