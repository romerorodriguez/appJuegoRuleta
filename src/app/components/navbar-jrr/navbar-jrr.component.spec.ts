import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarJrrComponent } from './navbar-jrr.component';

describe('NavbarJrrComponent', () => {
  let component: NavbarJrrComponent;
  let fixture: ComponentFixture<NavbarJrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarJrrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarJrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
