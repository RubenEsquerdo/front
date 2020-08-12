import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryParentComponent } from './story-parent.component';

describe('StoryParentComponent', () => {
  let component: StoryParentComponent;
  let fixture: ComponentFixture<StoryParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
