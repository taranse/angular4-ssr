import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAnonceComponent } from './news-anonce.component';

describe('NewsAnonceComponent', () => {
  let component: NewsAnonceComponent;
  let fixture: ComponentFixture<NewsAnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
