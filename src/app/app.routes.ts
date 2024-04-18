import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ErrorComponent } from './Components/error/error.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'error',component:ErrorComponent},
    {path:'',component:LoginComponent},
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}