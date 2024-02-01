import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedUsersComponent } from './fetched-users.component';

describe('FetchedUsersComponent', () => {
  let component: FetchedUsersComponent;
  let fixture: ComponentFixture<FetchedUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchedUsersComponent]
    });
    fixture = TestBed.createComponent(FetchedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
