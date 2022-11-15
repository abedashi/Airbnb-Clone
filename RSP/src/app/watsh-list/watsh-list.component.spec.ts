import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatshListComponent } from './watsh-list.component';

describe('WatshListComponent', () => {
  let component: WatshListComponent;
  let fixture: ComponentFixture<WatshListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatshListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatshListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
