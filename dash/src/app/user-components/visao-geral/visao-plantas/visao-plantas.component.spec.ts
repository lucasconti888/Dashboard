import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoPlantasComponent } from './visao-plantas.component';

describe('VisaoPlantasComponent', () => {
  let component: VisaoPlantasComponent;
  let fixture: ComponentFixture<VisaoPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisaoPlantasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisaoPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
