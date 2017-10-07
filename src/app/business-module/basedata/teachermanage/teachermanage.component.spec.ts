import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachermanageComponent } from './teachermanage.component';

describe('TeachermanageComponent', () => {
  let component: TeachermanageComponent;
  let fixture: ComponentFixture<TeachermanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachermanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachermanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
