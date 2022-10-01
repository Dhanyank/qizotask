import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobverifyComponent } from './mobverify.component';

describe('MobverifyComponent', () => {
  let component: MobverifyComponent;
  let fixture: ComponentFixture<MobverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobverifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
