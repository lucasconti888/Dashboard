import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmVisaoGeralComponent } from './adm-visao-geral.component';

describe('AdmVisaoGeralComponent', () => {
  let component: AdmVisaoGeralComponent;
  let fixture: ComponentFixture<AdmVisaoGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmVisaoGeralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmVisaoGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
