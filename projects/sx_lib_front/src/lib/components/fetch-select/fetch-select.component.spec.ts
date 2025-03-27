import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchSelectComponent } from './fetch-select.component';

describe('FetchSelectComponent', () => {
  let component: FetchSelectComponent;
  let fixture: ComponentFixture<FetchSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
