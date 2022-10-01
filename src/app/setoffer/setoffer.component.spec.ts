import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetofferComponent } from './setoffer.component';

describe('SetofferComponent', () => {
  let component: SetofferComponent;
  let fixture: ComponentFixture<SetofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetofferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
