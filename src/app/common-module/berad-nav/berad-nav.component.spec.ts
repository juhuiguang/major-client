import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeradNavComponent } from './berad-nav.component';

describe('BeradNavComponent', () => {
  let component: BeradNavComponent;
  let fixture: ComponentFixture<BeradNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeradNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeradNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
