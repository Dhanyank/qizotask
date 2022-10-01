import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrntpgeComponent } from './frntpge.component';

describe('FrntpgeComponent', () => {
  let component: FrntpgeComponent;
  let fixture: ComponentFixture<FrntpgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrntpgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrntpgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
