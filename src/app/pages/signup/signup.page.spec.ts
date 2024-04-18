import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signupPage } from './signup.page';

describe('signupPage', () => {
  let component: signupPage;
  let fixture: ComponentFixture<signupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(signupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

