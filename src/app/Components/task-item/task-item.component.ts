import { Component, Input } from '@angular/core';
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

  onClick(){
    console.log("OnClick")
  }
}
