import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermmanageComponent } from './termmanage.component';

describe('TermmanageComponent', () => {
  let component: TermmanageComponent;
  let fixture: ComponentFixture<TermmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
