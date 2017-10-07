import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursetreeComponent } from './coursetree.component';

describe('CoursetreeComponent', () => {
  let component: CoursetreeComponent;
  let fixture: ComponentFixture<CoursetreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursetreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursetreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
