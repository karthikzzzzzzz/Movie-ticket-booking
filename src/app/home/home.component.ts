import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import  jsondata from '../assets/data/trending-movies.json';
import data from '../assets/data/theatre-movies.json';
import karthik from '../assets/data/popular-movies.json';
import { Router } from '@angular/router';
import { AuthService } from '../ser/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hello:any=jsondata;
  bye:any=data;
  sobba:any=karthik;


  constructor(private http: HttpClient,private router:Router) {
    
    

  }
  ngOnInit(): void {
  
  
  
  }
  gotomovie(type:string,id:string){
    this.router.navigate(['movie',type, id]);

  }
  
  
  

}




