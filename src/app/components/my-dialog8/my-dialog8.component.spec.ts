import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialog8Component } from './my-dialog8.component';

describe('MyDialog8Component', () => {
  let component: MyDialog8Component;
  let fixture: ComponentFixture<MyDialog8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDialog8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDialog8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
