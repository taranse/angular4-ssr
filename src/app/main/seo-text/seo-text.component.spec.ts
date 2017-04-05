import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoTextComponent } from './seo-text.component';

describe('SeoTextComponent', () => {
  let component: SeoTextComponent;
  let fixture: ComponentFixture<SeoTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
