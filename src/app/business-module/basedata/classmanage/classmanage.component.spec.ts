import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassmanageComponent } from './classmanage.component';

describe('ClassmanageComponent', () => {
  let component: ClassmanageComponent;
  let fixture: ComponentFixture<ClassmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
