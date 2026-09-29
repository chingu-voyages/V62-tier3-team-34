import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberThoughtCard } from './member-thought-card';

describe('MemberThoughtCard', () => {
  let component: MemberThoughtCard;
  let fixture: ComponentFixture<MemberThoughtCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberThoughtCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberThoughtCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('thought', {
      name: 'Test Member',
      role: 'Reviewer',
      quote: 'A thought for testing',
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
