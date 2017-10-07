import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajormanageComponent } from './majormanage.component';

describe('MajormanageComponent', () => {
  let component: MajormanageComponent;
  let fixture: ComponentFixture<MajormanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajormanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajormanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
