<h2 style="text-decoration: underline; color: blue">
  Some of the most fundamental concepts of Angular DOM manipulation
</h2>
<h3>
  Concept of interchange of data between component class and the view using
  [(ngModel)] (2-way binding)
</h3>
<app-my-dialog8></app-my-dialog8>
<h3>
  Concept of change in view but not in the class variable component using
  [ngModel] (1-way binding)
</h3>
<div>
  <input
    [ngModel]="number"
    placeholder="Enter your username"
    (click)="showChange()"
  />
  <p>Your number in a model is still: {{ number }}</p>
</div>
<h3 ngNonBindable>
  Concept of loading value from the class into the view using
  {{ number }} (interpolation)
</h3>
<div>
  <p>Your number value in the class model is: {{ number }}</p>
</div>
<h3>
  Concept of using conditional Angular display,if showOutput=true (clicking Show
  button) (Angular directive if)
</h3>
<p-button (onClick)="showDialog()" label="Show" />

@if(visible){
<div class="output-section">
  <p>If Visible</p>
</div>
}
<h3>Concept of using for loop in Angular (Angular directive ngFor)</h3>
@for(value of names;track value){
<li>{{ value }}</li>
}
<h3>Concept of using ngSwitch in Angular (Angular directive ngSwitch)</h3>
<app-my-dialog7></app-my-dialog7>
<h3>
  Concept of using ngStyle for dynamic modification of text(Angular directive
  ngStyle)
</h3>
<app-my-dialog6></app-my-dialog6>
<h3>
  Concept of using custom directive for dynamic modification of text background
  (Angular custome directive Highlights Directive)
</h3>
<div appHighligts>
  <p>Hello Custom Directive Highlights! (hover mouse on text)</p>
</div>
<h3>
  Concept of using Angular Emmiter and sending an event from child to parent
  (base case) + using Angular Lifecycle Hooks (ngOnInit,ngOnDestroy)
</h3>
<div>
  <app-my-dialog (notify)="getNotification($event)"></app-my-dialog>
</div>
<h3>
  Concept of using Angular Emmiter and sending the data from child to parent
</h3>
<div>
  <app-my-dialog2 (notify2)="getNotification2($event)"></app-my-dialog2>
</div>
<h3>Concept of using Angular Event Template Reference variable (#email)</h3>
<div>
  <app-my-dialog3></app-my-dialog3>
</div>
<h3>
  Concept of using Angular Event Modifier (triggering event on ENTER or CTRL+z)
</h3>
<div>
  <app-my-dialog4></app-my-dialog4>
</div>
<h3>Concept of Angular State Management with Signal and (ngModelChange)</h3>
<app-my-dialog5></app-my-dialog5>
