import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-my-dialog8',
  standalone: true,
  imports: [FormsModule, ButtonModule, DialogModule],
  templateUrl: './my-dialog8.component.html',
  styleUrl: './my-dialog8.component.scss',
})
export class MyDialog8Component {
  showOutput: boolean = false;
  visible: boolean = false;
  email: string | undefined;
  username: string | undefined;
  email2: string | undefined;
  username2: string | undefined;
  number: number = 4;
  names: Array<string> = ['Alice', 'Bob', 'Charlie'];

  showDialog() {
    this.visible = true;
  }
  save() {
    console.log('Username :', this.username);
    console.log('Email :', this.email);
    this.showOutput = true;
    this.email2 = this.email;
    this.username2 = this.username;
    this.username = '';
    this.email = '';
  }
}
