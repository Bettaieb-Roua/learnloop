import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnneePage } from './annee.page';

describe('AnneePage', () => {
  let component: AnneePage;
  let fixture: ComponentFixture<AnneePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnneePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
