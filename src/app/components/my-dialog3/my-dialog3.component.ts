import { Component } from '@angular/core';

@Component({
  selector: 'app-my-dialog3',
  standalone: true,
  imports: [],
  templateUrl: './my-dialog3.component.html',
  styleUrl: './my-dialog3.component.scss',
})
export class MyDialog3Component {
  emailError: string | undefined;

  OnClick(email: string) {
    if (!this.isValidEmail(email)) {
      this.emailError = 'Enter Valid Email';
    } else {
      this.emailError = '';
    }
  }
  isValidEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
