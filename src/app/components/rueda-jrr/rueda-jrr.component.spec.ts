import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuedaJrrComponent } from './rueda-jrr.component';

describe('RuedaJrrComponent', () => {
  let component: RuedaJrrComponent;
  let fixture: ComponentFixture<RuedaJrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuedaJrrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuedaJrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
