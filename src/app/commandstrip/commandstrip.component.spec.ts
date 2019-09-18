import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandstripComponent } from './commandstrip.component';

describe('CommandstripComponent', () => {
  let component: CommandstripComponent;
  let fixture: ComponentFixture<CommandstripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandstripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandstripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
