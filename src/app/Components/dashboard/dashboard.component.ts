import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { TaskComponent } from '../task/task.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonModule,TaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'taskify';
}
