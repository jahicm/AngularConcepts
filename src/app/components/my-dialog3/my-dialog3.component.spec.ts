import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialog3Component } from './my-dialog3.component';

describe('MyDialog3Component', () => {
  let component: MyDialog3Component;
  let fixture: ComponentFixture<MyDialog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDialog3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDialog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
