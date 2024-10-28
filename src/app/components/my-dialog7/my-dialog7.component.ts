import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-my-dialog7',
  standalone: true,
  imports: [RadioButtonModule, FormsModule],
  templateUrl: './my-dialog7.component.html',
  styleUrl: './my-dialog7.component.scss',
})
export class MyDialog7Component {
  ingredient: string | undefined;
}
