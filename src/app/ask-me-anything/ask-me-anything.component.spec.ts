import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskMeAnythingComponent } from './ask-me-anything.component';

describe('AskMeAnythingComponent', () => {
  let component: AskMeAnythingComponent;
  let fixture: ComponentFixture<AskMeAnythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskMeAnythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskMeAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
