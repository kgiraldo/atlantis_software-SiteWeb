import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlantisBusinessComponent } from './atlantis-business.component';

describe('AtlantisBusinessComponent', () => {
  let component: AtlantisBusinessComponent;
  let fixture: ComponentFixture<AtlantisBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtlantisBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlantisBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
