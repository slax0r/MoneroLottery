import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbNumberpickerComponent } from './ngbnumberpicker.component';

describe('NgbNumberpickerComponent', () => {
  let component: NgbNumberpickerComponent;
  let fixture: ComponentFixture<NgbNumberpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbNumberpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbNumberpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
