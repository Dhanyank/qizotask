import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpnysignupComponent } from './cmpnysignup.component';

describe('CmpnysignupComponent', () => {
  let component: CmpnysignupComponent;
  let fixture: ComponentFixture<CmpnysignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpnysignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpnysignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
