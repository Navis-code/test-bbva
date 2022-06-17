import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGameSelectionComponent } from './modal-game-selection.component';

describe('ModalGameSelectionComponent', () => {
  let component: ModalGameSelectionComponent;
  let fixture: ComponentFixture<ModalGameSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGameSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGameSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
