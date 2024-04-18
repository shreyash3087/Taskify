import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../AuthService';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public username: string = "";
  public password: string = "";
  public loggedin: boolean = true;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {}

  onSubmit() {
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
  onClick() {
    this.router.navigateByUrl('/dashboard');
    this.authService.loggedIn = false;
  }
}
