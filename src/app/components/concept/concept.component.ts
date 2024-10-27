import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { HighligtsDirective } from '../../customdirectives/highligts.directive';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { MyDialog2Component } from '../my-dialog2/my-dialog2.component';
import { MyDialog3Component } from "../my-dialog3/my-dialog3.component";
import { MyDialog4Component } from '../my-dialog4/my-dialog4.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    RadioButtonModule,
    CommonModule,
    HighligtsDirective,
    MyDialogComponent,
    MyDialog2Component,
    MyDialog3Component,
    MyDialog4Component
],
  templateUrl: './concept.component.html',
  styleUrl: './concept.component.scss'
})
export class ConceptComponent {

  visible: boolean = false;
  email: string | undefined;
  username: string | undefined;
  email2: string | undefined;
  username2: string | undefined;
  showOutput: boolean = false;
  number: number=4;
  names: Array<string> = ['Alice', 'Bob', 'Charlie'];
  ingredient: string="";
  color: string | undefined;;
  fontSize: string | undefined;

  getNotification2(event: string)
  {
    alert(event);
  }

  getNotification(event: string)
  {
    alert(event);
  }

  changeStyle(style: string)
  {
    switch (style.toLowerCase()) {
      case 'red':
        this.color = 'red';
        this.fontSize="3rem";
        break;
      case 'green':
        this.color = 'green';
        this.fontSize="4rem";
        break;
      case 'blue':
        this.color = 'blue';
        this.fontSize="5rem";
        break;
      default:
        this.color = 'gray'; // Default color if no match
        this.fontSize="3rem";
    }
  }
  showChange()
  {
    console.log("Number is :",this.number);
  }
  print()
  {
    console.log("Number is :",this.number);
  }
  showDialog()
  {
    this.visible = true;
    

  }
  save()
  {
    console.log("Username :",this.username);
    console.log("Email :",this.email);
    this.showOutput=true;
    this.email2 = this.email;
    this.username2 = this.username;
    this.username="";
    this.email="";
  }
}
