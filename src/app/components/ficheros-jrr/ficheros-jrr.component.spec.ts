import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicherosJrrComponent } from './ficheros-jrr.component';

describe('FicherosJrrComponent', () => {
  let component: FicherosJrrComponent;
  let fixture: ComponentFixture<FicherosJrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicherosJrrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicherosJrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
