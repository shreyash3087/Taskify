import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { TaskComponent } from '../task/task.component';
import { AuthService } from '../../../AuthService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonModule,TaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'taskify';
  constructor(private router: Router, private authService: AuthService) { }
  get loggedIn(): boolean {
    return this.authService.loggedIn;
  }
  sign(){
    this.router.navigateByUrl('/');
  }
}
