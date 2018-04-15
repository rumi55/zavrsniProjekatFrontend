import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljDetailComponent } from './roditelj-detail.component';

describe('RoditeljDetailComponent', () => {
  let component: RoditeljDetailComponent;
  let fixture: ComponentFixture<RoditeljDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoditeljDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
