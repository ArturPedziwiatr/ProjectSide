import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntyplagiatComponent } from './antyplagiat.component';

describe('AntyplagiatComponent', () => {
  let component: AntyplagiatComponent;
  let fixture: ComponentFixture<AntyplagiatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntyplagiatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntyplagiatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
