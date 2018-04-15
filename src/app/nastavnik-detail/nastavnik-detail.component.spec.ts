import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikDetailComponent } from './nastavnik-detail.component';

describe('NastavnikDetailComponent', () => {
  let component: NastavnikDetailComponent;
  let fixture: ComponentFixture<NastavnikDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
