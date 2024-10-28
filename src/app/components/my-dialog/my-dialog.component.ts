import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { interval } from 'rxjs';

@Component({
  selector: 'app-my-dialog',
  standalone: true,
  imports: [ButtonModule, InputTextModule, DialogModule],
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.scss',
})
export class MyDialogComponent implements OnInit,OnDestroy {

  @Output() notify = new EventEmitter();
  @Output() notify2 = new EventEmitter();
  subscription: any;

  notifyParent() {
    this.notify.emit('Emitted from the child component.');
  }

  ngOnInit() {
    const timer = interval(1000);
    this.subscription = timer.subscribe(() => {});
    console.log('SampleComponent initiated and subscription initiated');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('SampleComponent destroyed and subscription cleaned up');
  }
  
}
