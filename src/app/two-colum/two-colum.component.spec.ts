import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumComponent } from './two-colum.component';

describe('TwoColumComponent', () => {
  let component: TwoColumComponent;
  let fixture: ComponentFixture<TwoColumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
