import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
    // {path: '', component: DashboardComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'blog', component: BlogComponent},
    {path: 'home', component: DashboardComponent},
    {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
