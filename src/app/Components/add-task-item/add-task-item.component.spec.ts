import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskItemComponent } from './add-task-item.component';

describe('AddTaskItemComponent', () => {
  let component: AddTaskItemComponent;
  let fixture: ComponentFixture<AddTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
