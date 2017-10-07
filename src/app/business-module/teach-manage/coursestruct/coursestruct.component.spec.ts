import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursestructComponent } from './coursestruct.component';

describe('CoursestructComponent', () => {
  let component: CoursestructComponent;
  let fixture: ComponentFixture<CoursestructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursestructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursestructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
