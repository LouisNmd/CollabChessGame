import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceVoteComponent } from './interface-vote.component';

describe('InterfaceVoteComponent', () => {
  let component: InterfaceVoteComponent;
  let fixture: ComponentFixture<InterfaceVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
