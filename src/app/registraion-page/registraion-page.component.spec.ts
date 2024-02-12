import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraionPageComponent } from './registraion-page.component';

describe('RegistraionPageComponent', () => {
  let component: RegistraionPageComponent;
  let fixture: ComponentFixture<RegistraionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraionPageComponent]
    });
    fixture = TestBed.createComponent(RegistraionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
