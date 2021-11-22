import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OtherChildComponent} from './other-child.component';

describe('OtherChildComponent', () => {
  let component: OtherChildComponent;
  let fixture: ComponentFixture<OtherChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherChildComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
