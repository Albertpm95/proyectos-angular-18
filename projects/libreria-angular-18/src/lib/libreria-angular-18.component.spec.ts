import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaAngular18Component } from './libreria-angular-18.component';

describe('LibreriaAngular18Component', () => {
  let component: LibreriaAngular18Component;
  let fixture: ComponentFixture<LibreriaAngular18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibreriaAngular18Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibreriaAngular18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
