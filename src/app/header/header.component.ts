import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../ser/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router,private auth:AuthService){}
  ngOnInit(): void {
    
  }

  logout(){
    this.auth.logout();
  }
  goToHome(){
    this.router.navigate(['home']);
  }

}
