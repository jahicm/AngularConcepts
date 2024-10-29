import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TolowercasePipe } from '../tolowercase.pipe';

@Component({
  selector: 'app-my-dialog9',
  standalone: true,
  imports: [CommonModule,DropdownModule,FormsModule,TolowercasePipe],
  templateUrl: './my-dialog9.component.html',
  styleUrl: './my-dialog9.component.scss'
})
export class MyDialog9Component{

  today: any | undefined;
  value: string | undefined;
  value2: string | undefined;
  selectedCurrency: string | undefined;

  constructor(){this.today = Date.now()}
  
  currencies = [
    { label: "US Dollar", value: "USD" },
    { label: "Chinies Yuan", value: "CNY" },
    { label: "Japanese Yen", value: "JPY" },
    { label: "British Pound", value: "GBP" },
    { label: "Russian Rubel", value: "RUB" }
  ];
  
  toUpperCase(val: string)
  {
    this.value= val;
  }
  toLowerCase(val: string)
  {
    this.value2=val;
  }
}
