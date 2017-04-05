import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbSidenavComponent } from './mdb-sidenav.component';

describe('MdbSidenavComponent', () => {
  let component: MdbSidenavComponent;
  let fixture: ComponentFixture<MdbSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
