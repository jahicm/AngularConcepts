import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialog6Component } from './my-dialog6.component';

describe('MyDialog6Component', () => {
  let component: MyDialog6Component;
  let fixture: ComponentFixture<MyDialog6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDialog6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDialog6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
