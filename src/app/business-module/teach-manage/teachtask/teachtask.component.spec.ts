import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachtaskComponent } from './teachtask.component';

describe('TeachtaskComponent', () => {
  let component: TeachtaskComponent;
  let fixture: ComponentFixture<TeachtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
