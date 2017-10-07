import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepmanageComponent } from './depmanage.component';

describe('DepmanageComponent', () => {
  let component: DepmanageComponent;
  let fixture: ComponentFixture<DepmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
