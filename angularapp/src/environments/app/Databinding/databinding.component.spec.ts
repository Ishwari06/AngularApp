import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatbindingComponent } from './databinding.component';

describe('DatatbindingComponent', () => {
  let component: DatatbindingComponent;
  let fixture: ComponentFixture<DatatbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
