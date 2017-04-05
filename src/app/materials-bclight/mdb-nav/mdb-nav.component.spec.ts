import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbNavComponent } from './mdb-nav.component';

describe('MdbNavComponent', () => {
  let component: MdbNavComponent;
  let fixture: ComponentFixture<MdbNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
