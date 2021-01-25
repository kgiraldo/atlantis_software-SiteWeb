import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffertComponent } from './job-offert.component';

describe('JobOffertComponent', () => {
  let component: JobOffertComponent;
  let fixture: ComponentFixture<JobOffertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOffertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOffertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
