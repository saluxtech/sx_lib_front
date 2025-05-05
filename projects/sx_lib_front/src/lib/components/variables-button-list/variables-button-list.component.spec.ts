import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VariablesButtonListComponent } from './variables-button-list.component';

describe('VariablesButtonListComponent', () => {
  let component: VariablesButtonListComponent;
  let fixture: ComponentFixture<VariablesButtonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariablesButtonListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariablesButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
