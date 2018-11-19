import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'blog', component: BlogComponent},
    {path: 'home', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
