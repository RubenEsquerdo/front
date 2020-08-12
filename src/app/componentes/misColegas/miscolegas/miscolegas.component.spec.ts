import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscolegasComponent } from './miscolegas.component';

describe('MiscolegasComponent', () => {
  let component: MiscolegasComponent;
  let fixture: ComponentFixture<MiscolegasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscolegasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscolegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
