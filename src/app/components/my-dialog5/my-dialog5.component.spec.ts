import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialog5Component } from './my-dialog5.component';

describe('MyDialog5Component', () => {
  let component: MyDialog5Component;
  let fixture: ComponentFixture<MyDialog5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDialog5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDialog5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
