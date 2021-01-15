import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommersialisationComponent } from './commersialisation.component';

describe('CommersialisationComponent', () => {
  let component: CommersialisationComponent;
  let fixture: ComponentFixture<CommersialisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommersialisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommersialisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
