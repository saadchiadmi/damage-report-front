import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingArchiveComponent } from './reporting-archive.component';

describe('ReportingArchiveComponent', () => {
  let component: ReportingArchiveComponent;
  let fixture: ComponentFixture<ReportingArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
