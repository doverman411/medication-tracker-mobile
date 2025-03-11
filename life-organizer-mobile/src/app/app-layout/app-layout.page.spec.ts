import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppLayoutPage } from './app-layout.page';

describe('AppLayoutPage', () => {
  let component: AppLayoutPage;
  let fixture: ComponentFixture<AppLayoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
