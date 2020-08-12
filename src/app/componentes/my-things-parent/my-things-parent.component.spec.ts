import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThingsParentComponent } from './my-things-parent.component';

describe('MyThingsParentComponent', () => {
  let component: MyThingsParentComponent;
  let fixture: ComponentFixture<MyThingsParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyThingsParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThingsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
