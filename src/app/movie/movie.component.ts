import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule],
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  premiumRows: number = 5;
  superPremiumRows: number = 3;
  eliteRows: number = 2;

  seatsPerRow: number = 25; 
  premiumSeats: any[] = [];
  superPremiumSeats: any[] = [];
  eliteSeats: any[] = [];
  selectedSeats: any[] = [];
  totalPrice: number = 0;

  constructor() {
    this.generateAllSeats(); 
  }

 
  generateSeatRow(type: string, rows: number, price: number): any[] {
    let seats = [];
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= this.seatsPerRow; j++) {
        seats.push({
          number: `${type}${i}`,
          selected: false,
          price: price
        });
      }
    }
    return seats;
  }

  
  generateAllSeats() {
    this.premiumSeats = this.generateSeatRow('P', this.premiumRows, 170); // Premium
    this.superPremiumSeats = this.generateSeatRow('SP', this.superPremiumRows, 195); // Super Premium
    this.eliteSeats = this.generateSeatRow('E', this.eliteRows, 130); // Elite
  }

 
  toggleSeat(seat: any) {
    seat.selected = !seat.selected;

    if (seat.selected) {
      this.selectedSeats.push(seat);
    } else {
      this.selectedSeats = this.selectedSeats.filter(s => s.number !== seat.number);
    }

    this.calculateTotalPrice(); // 
  }


  calculateTotalPrice() {
    this.totalPrice = this.selectedSeats.reduce((total, seat) => total + seat.price, 0);
  }
}
