import { Component, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-my-dialog2',
  standalone: true,
  imports: [],
  templateUrl: './my-dialog2.component.html',
  styleUrl: './my-dialog2.component.scss'
})
export class MyDialog2Component {
  
  @Output() notify2 = new EventEmitter();
  subscription: any;

  notifyParent2(event: KeyboardEvent){

    this.notify2.emit((event.currentTarget as any).value);
  }
  ngOnInit() {
    const timer = interval(1000);
    this.subscription = timer.subscribe(() => {});
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('SampleComponent destroyed and subscription cleaned up');

  }
}
