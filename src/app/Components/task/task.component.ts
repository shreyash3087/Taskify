import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Task } from './task';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,TaskItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task:Task[];
  constructor(){
    this.task = [
      {
        sno: 1,
        title: "This is a task",
        time: new Date(),
        date: new Date(2021, 11, 12), 
        active: true
      },
      {
        sno: 2,
        title: "This is task2",
        time: new Date(),
        date: new Date(2021, 11, 12), 
        active: true
      },
      {
        sno: 3,
        title: "This is task3",
        time: new Date(),
        date: new Date(2021, 11, 12), 
        active: true
      },
    ];
    
  }
}
