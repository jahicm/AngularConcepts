import { Component, computed, effect, signal, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-dialog5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-dialog5.component.html',
  styleUrl: './my-dialog5.component.scss',
})
export class MyDialog5Component {
  interestRate = signal(3.5); // Default interest rate

  // Derived signals for each currency
  usd = computed(() => this.calculateCurrencyEffect(1.0)); // Dollar as base
  eur = computed(() => this.calculateCurrencyEffect(0.85)); // Euro
  gbp = computed(() => this.calculateCurrencyEffect(0.75)); // Pound
  chf = computed(() => this.calculateCurrencyEffect(0.9)); // Swiss Franc
  cny = computed(() => this.calculateCurrencyEffect(6.45)); // Yuan

  constructor() {
    // Effect to watch for interest rate changes and log updated values
    effect(() => {
      console.log(`Interest Rate changed to ${this.interestRate()}%.`);
      console.log(`Updated USD value: ${this.usd()}`);
      console.log(`Updated EUR value: ${this.eur()}`);
      console.log(`Updated GBP value: ${this.gbp()}`);
      console.log(`Updated CHF value: ${this.chf()}`);
      console.log(`Updated CNY value: ${this.cny()}`);
    });
 
  }

  // Method to calculate currency effect based on interest rate
  calculateCurrencyEffect(baseValue: number): number {
    return baseValue * (1 + this.interestRate() / 100);
  }

  // Method to update the interest rate
  updateInterestRate(newRate: string) {
    this.interestRate.set(parseFloat(newRate));
    alert(`Interest Rate changed to ${this.interestRate()}%.`);
  }
  logInterestRate() {
    // Access interestRate without establishing a reactive dependency
    const currentRate = untracked(() => this.interestRate());
    console.log(`Current Interest Rate: ${currentRate}`);
  }
}
