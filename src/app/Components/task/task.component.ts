import {Component,NgZone} from '@angular/core';
import { Task } from './task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskItemComponent } from '../add-task-item/add-task-item.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskItemComponent,AddTaskItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task:Task[];
  constructor(){
    this.task = [];
  }
  taskRemover(indivisualtask: Task){
    const index = this.task.indexOf(indivisualtask);
    if (index > -1) { 
      this.task.splice(index, 1); 
    }
  }
  taskAdd(indivisualtask:Task){
    this.task.push(indivisualtask)
  }
}
