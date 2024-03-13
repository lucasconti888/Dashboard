import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoGeralGeralComponent } from './visao-geral.component';

describe('VisaoGeralGeralComponent', () => {
  let component: VisaoGeralGeralComponent;
  let fixture: ComponentFixture<VisaoGeralGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisaoGeralGeralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisaoGeralGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
