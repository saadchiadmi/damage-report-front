import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportingArchiveComponent } from './reporting-archive/reporting-archive.component';


const routes: Routes = [
  { path: 'dashboard',        component: DashboardComponent },
  { path: 'reporting-archive',component: ReportingArchiveComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
