import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsSellerPage } from './tabs-seller.page';

describe('TabsSellerPage', () => {
  let component: TabsSellerPage;
  let fixture: ComponentFixture<TabsSellerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsSellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
