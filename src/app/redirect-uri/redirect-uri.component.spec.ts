import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectUriComponent } from './redirect-uri.component';

describe('RedirectUriComponent', () => {
  let component: RedirectUriComponent;
  let fixture: ComponentFixture<RedirectUriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectUriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
