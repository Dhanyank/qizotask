import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcategoryComponent } from './shopcategory.component';

describe('ShopcategoryComponent', () => {
  let component: ShopcategoryComponent;
  let fixture: ComponentFixture<ShopcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
