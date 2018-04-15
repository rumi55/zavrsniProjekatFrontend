import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikDetailComponent } from './ucenik-detail.component';

describe('UcenikDetailComponent', () => {
  let component: UcenikDetailComponent;
  let fixture: ComponentFixture<UcenikDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
