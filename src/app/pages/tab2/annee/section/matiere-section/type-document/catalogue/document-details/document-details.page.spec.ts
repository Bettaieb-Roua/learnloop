import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentDetailsPage } from './document-details.page';

describe('DocumentDetailsPage', () => {
  let component: DocumentDetailsPage;
  let fixture: ComponentFixture<DocumentDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DocumentDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
