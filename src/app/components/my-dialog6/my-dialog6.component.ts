import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-my-dialog6',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './my-dialog6.component.html',
  styleUrl: './my-dialog6.component.scss',
})
export class MyDialog6Component {
  color: string | undefined;
  fontSize: string | undefined;

  changeStyle(style: string) {
    switch (style.toLowerCase()) {
      case 'red':
        this.color = 'red';
        this.fontSize = '3rem';
        break;
      case 'green':
        this.color = 'green';
        this.fontSize = '4rem';
        break;
      case 'blue':
        this.color = 'blue';
        this.fontSize = '5rem';
        break;
      default:
        this.color = 'gray'; // Default color if no match
        this.fontSize = '3rem';
    }
  }
}
