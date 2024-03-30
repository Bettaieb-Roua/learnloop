import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeDocumentPage } from './type-document.page';

describe('TypeDocumentPage', () => {
  let component: TypeDocumentPage;
  let fixture: ComponentFixture<TypeDocumentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypeDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
