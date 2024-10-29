import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighligtsDirective } from '../../customdirectives/highligts.directive';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { MyDialog2Component } from '../my-dialog2/my-dialog2.component';
import { MyDialog3Component } from '../my-dialog3/my-dialog3.component';
import { MyDialog4Component } from '../my-dialog4/my-dialog4.component';
import { MyDialog5Component } from '../my-dialog5/my-dialog5.component';
import { MyDialog6Component } from '../my-dialog6/my-dialog6.component';
import { MyDialog7Component } from '../my-dialog7/my-dialog7.component';
import { MyDialog8Component } from '../my-dialog8/my-dialog8.component';
import { MyDialog9Component } from "../my-dialog9/my-dialog9.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    CommonModule,
    HighligtsDirective,
    MyDialogComponent,
    MyDialog2Component,
    MyDialog3Component,
    MyDialog4Component,
    MyDialog5Component,
    MyDialog6Component,
    MyDialog7Component,
    MyDialog8Component,
    MyDialog9Component
],
  templateUrl: './concept.component.html',
  styleUrl: './concept.component.scss',
})
export class ConceptComponent {
  email: string | undefined;
  number: number = 4;
  names: Array<string> = ['Alice', 'Bob', 'Charlie'];
  visible: boolean = false;

  getNotification2(event: string) {
    alert(event);
  }

  getNotification(event: string) {
    alert(event);
  }
  showChange() {
    console.log('Number is :', this.number);
  }
  showDialog() {
    this.visible = !this.visible;
  }
}
