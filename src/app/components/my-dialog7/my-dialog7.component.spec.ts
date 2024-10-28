import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialog7Component } from './my-dialog7.component';

describe('MyDialog7Component', () => {
  let component: MyDialog7Component;
  let fixture: ComponentFixture<MyDialog7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDialog7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDialog7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
