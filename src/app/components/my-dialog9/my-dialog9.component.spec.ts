import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialog9Component } from './my-dialog9.component';

describe('MyDialog9Component', () => {
  let component: MyDialog9Component;
  let fixture: ComponentFixture<MyDialog9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDialog9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDialog9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
