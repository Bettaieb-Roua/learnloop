import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatiereSectionPage } from './matiere-section.page';

describe('MatiereSectionPage', () => {
  let component: MatiereSectionPage;
  let fixture: ComponentFixture<MatiereSectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatiereSectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
