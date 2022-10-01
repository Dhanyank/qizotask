import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemofferlistComponent } from './itemofferlist.component';

describe('ItemofferlistComponent', () => {
  let component: ItemofferlistComponent;
  let fixture: ComponentFixture<ItemofferlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemofferlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemofferlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
