import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsbarComponent } from './statsbar.component';

describe('StatsbarComponent', () => {
  let component: StatsbarComponent;
  let fixture: ComponentFixture<StatsbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
