import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmanageComponent } from './studentmanage.component';

describe('StudentmanageComponent', () => {
  let component: StudentmanageComponent;
  let fixture: ComponentFixture<StudentmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
