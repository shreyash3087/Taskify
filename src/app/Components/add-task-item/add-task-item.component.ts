import { Component, EventEmitter, Output } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task';
import { Time } from '@angular/common';
@Component({
  selector: 'app-add-task-item',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule],
  templateUrl: './add-task-item.component.html',
  styleUrl: './add-task-item.component.css'
})
export class AddTaskItemComponent {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();
  tasktitle: string;
  tasktime: Time;
  duedate: Date;

  onSubmit() {
    if (!this.tasktitle || !this.tasktime || !this.duedate) {
      alert('Please fill in all fields!');
      return;
    }
    const monthAbbreviation = this.duedate.toLocaleString('en-us', { month: 'short' });

    const day = this.duedate.getDate();

    const year = this.duedate.getFullYear();

    const formattedDate = `${monthAbbreviation} ${day} ${year}`;
    
    const indivisualtask = {
      sno: 1,
      title: this.tasktitle,
      time: this.tasktime,
      date: formattedDate,
      active: true
    }
    
    this.addTask.emit(indivisualtask);
  }
}
