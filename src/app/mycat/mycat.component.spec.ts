import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycatComponent } from './mycat.component';

describe('MycatComponent', () => {
  let component: MycatComponent;
  let fixture: ComponentFixture<MycatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
