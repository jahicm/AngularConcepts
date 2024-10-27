<h2 style="text-decoration: underline; color: blue">
  Some of the most fundamental concepts of Angular DOM manipulation
</h2>
<h3>
  Concept of interchange of data between component class and the view using
  [(ngModel)] (2-way binding)
</h3>
<p-button (onClick)="showDialog()" label="Show" />

<div class="output-section" class="label2">
  <p>Entered Username: {{ username2 }}</p>
  <p>Entered Password: {{ email2 }}</p>
</div>

<p-dialog
  header="Edit Profile"
  [modal]="true"
  [(visible)]="visible"
  [style]="{ width: '30rem' }"
>
  <div class="dialog-content">
    <span class="p-text-secondary mb-3">Update your information.</span>

    <!-- Username Input -->
    <div class="flex align-items-center mb-3 justify-content-end">
      <label for="username" class="label">Username</label>
      <input
        pInputText
        id="username"
        class="input-field"
        [(ngModel)]="username"
        autocomplete="off"
      />
    </div>

    <!-- Email Input -->
    <div class="flex align-items-center mb-4 justify-content-end">
      <label for="email" class="label">Email</label>
      <input
        pInputText
        id="email"
        class="input-field"
        [(ngModel)]="email"
        autocomplete="off"
      />
    </div>

    <!-- Action Buttons -->
    <div class="flex justify-content-end">
      <p-button
        label="Cancel"
        severity="secondary"
        (click)="visible = false"
      ></p-button>
      <p-button
        label="Save"
        (click)="visible = false"
        (onClick)="save()"
      ></p-button>
    </div>
  </div>
</p-dialog>
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
@if(showOutput){
<div class="output-section">
  <p>Entered Username: {{ username2 }}</p>
  <p>Entered Password: {{ email2 }}</p>
</div>
}
<h3>Concept of using for loop in Angular (Angular directive ngFor)</h3>
@for(value of names;track value){
<li>{{ value }}</li>
}
<h3>Concept of using ngSwitch in Angular (Angular directive ngSwitch)</h3>
<div class="flex flex-wrap gap-3">
  <div class="flex align-items-center">
    <p-radioButton
      name="pizza"
      value="Cheese"
      [(ngModel)]="ingredient"
      inputId="ingredient1"
    />
    <label for="ingredient1" class="ml-2"> Cheese </label>
  </div>
  <div class="flex align-items-center">
    <p-radioButton
      name="pizza"
      value="Mushroom"
      [(ngModel)]="ingredient"
      inputId="ingredient2"
    />
    <label for="ingredient2" class="ml-2"> Mushroom </label>
  </div>
  <div class="flex align-items-center">
    <p-radioButton
      name="pizza"
      value="Pepper"
      [(ngModel)]="ingredient"
      inputId="ingredient3"
    />
    <label for="ingredient3" class="ml-2"> Pepper </label>
  </div>
  <div class="flex align-items-center">
    <p-radioButton
      name="pizza"
      value="Onion"
      [(ngModel)]="ingredient"
      inputId="ingredient4"
    />
    <label for="ingredient4" class="ml-2"> Onion </label>
  </div>
</div>
<div class="label2">
  @switch(ingredient) { @case ('Cheese') {
  <p>Selected Cheese Pizza</p>
  } @case ('Pepper') {
  <p>Selected Pepper Pizza</p>
  } @case('Onion'){
  <p>Selected Onion Pizza</p>
  } @case('Mushroom'){
  <p>Selected Mushroom Pizza</p>
  } @default {
  <p>No selection of Pizza</p>
  } }
</div>
<h3>
  Concept of using ngStyle for dynamic modification of text(Angular directive
  ngStyle)
</h3>
<div style="display: flex; gap: 10px">
  <p-button
    (onClick)="changeStyle('red')"
    label="Red 3rem"
    [style]="{ 'background-color': 'red' }"
  />
  <p-button
    (onClick)="changeStyle('green')"
    label="Green 5rem"
    [style]="{ 'background-color': 'green' }"
  />
  <p-button
    (onClick)="changeStyle('blue')"
    label="Blue 7rem"
    [style]="{ 'background-color': 'blue' }"
  />
  <div [ngStyle]="{ color: color, 'font-size': fontSize }">TEST</div>
</div>
<h3>
  Concept of using custom directive for dynamic modification of text background
  (Angular custome directive Highlights Directive)
</h3>
<div appHighligts>
  <p>Hello Custom Directive Highlights! (hover mouse on text)</p>
</div>
<h3>
  Concept of using Angular Emmiter and sending an event from child to parent
  (base case)
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
