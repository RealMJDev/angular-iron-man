import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideLogoComponent } from './hide-logo.component';

describe('HideLogoComponent', () => {
  let component: HideLogoComponent;
  let fixture: ComponentFixture<HideLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
