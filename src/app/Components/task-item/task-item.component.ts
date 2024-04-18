import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() indivisualtask: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();

  onClick(indivisualtask:Task){
    this.deleteTask.emit(this.indivisualtask);
    console.log("OnClick")
  }
}
