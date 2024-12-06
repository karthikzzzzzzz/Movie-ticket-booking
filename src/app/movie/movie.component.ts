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
  ticketCount: number = 1; // Default ticket count

  constructor() {
    this.generateAllSeats(); 
  }

  generateSeatRow(type: string, rows: number, price: number): any[] {
    let seats = [];
    let seatNumber = 1; 
    for (let i = 0; i < rows; i++) {
      for (let j = 1; j <= this.seatsPerRow; j++) {
        seats.push({
          number: `${type}${seatNumber}`,
          selected: false,
          price: price
        });
        seatNumber++; 
      }
    }
    return seats;
  }

  generateAllSeats() {
    this.premiumSeats = this.generateSeatRow('P', this.premiumRows, 170);
    this.superPremiumSeats = this.generateSeatRow('SP', this.superPremiumRows, 195);
    this.eliteSeats = this.generateSeatRow('E', this.eliteRows, 130);
  }

  toggleSeat(seat: any) {
    if (!seat.selected && this.selectedSeats.length < this.ticketCount) {
      seat.selected = true;
      this.selectedSeats.push(seat);
    } else if (seat.selected) {
      seat.selected = false;
      this.selectedSeats = this.selectedSeats.filter(s => s.number !== seat.number);
    }

    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.selectedSeats.reduce((total, seat) => total + seat.price, 0);
  }

  handleTicketCountChange() {
    while (this.selectedSeats.length > this.ticketCount) {
      const removedSeat = this.selectedSeats.pop();
      if (removedSeat) {
        removedSeat.selected = false;
      }
    }
    this.calculateTotalPrice();
  }
}
