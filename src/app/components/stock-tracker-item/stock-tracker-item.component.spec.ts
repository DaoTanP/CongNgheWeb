import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTrackerItemComponent } from './stock-tracker-item.component';

describe('StockTrackerItemComponent', () => {
  let component: StockTrackerItemComponent;
  let fixture: ComponentFixture<StockTrackerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTrackerItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTrackerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
