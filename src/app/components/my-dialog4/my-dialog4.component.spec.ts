import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialog4Component } from './my-dialog4.component';

describe('MyDialog4Component', () => {
  let component: MyDialog4Component;
  let fixture: ComponentFixture<MyDialog4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDialog4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDialog4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
