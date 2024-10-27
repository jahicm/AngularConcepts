import { Component } from '@angular/core';

@Component({
  selector: 'app-my-dialog4',
  standalone: true,
  imports: [],
  templateUrl: './my-dialog4.component.html',
  styleUrl: './my-dialog4.component.scss',
})
export class MyDialog4Component {
  OnEnter() {
    alert('Enter was hit!');
  }
  OnUndo() {
    
    alert('Ctrl+z undo!');
  }
}
