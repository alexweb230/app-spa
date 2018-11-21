import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {DashboardDetailComponent} from './dashboard-detail/dashboard-detail.component';

const routes: Routes = [
    // {path: '', component: DashboardComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'blog', component: BlogComponent},
    {
        path: 'home', component: DashboardComponent,
        // children: [
        //     {path: 'detail', component: DashboardComponent}
        // ]
    },
    {
        path: 'home/:id',
        component: DashboardDetailComponent
    },

    {path: '**', component: NotfoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
    BlogComponent,
    DashboardComponent,
    DashboardComponent
]
