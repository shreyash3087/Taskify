import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { TaskComponent } from './Components/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskify';
}
