import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroJrrComponent } from './tablero-jrr.component';

describe('TableroJrrComponent', () => {
  let component: TableroJrrComponent;
  let fixture: ComponentFixture<TableroJrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroJrrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroJrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
