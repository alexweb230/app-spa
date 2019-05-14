import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatTabsModule} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';


import 'hammerjs';
import 'mousetrap';
import {ModalGalleryModule} from 'angular-modal-gallery';
import { FooterComponent } from './footer/footer.component';
import {DashboardService} from './services/dashboard.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import {BlogService} from './services/blog.service';
import { DashhoverDirective } from './dashhover.directive';
import { SearchDashboardPipe } from './search-dashboard.pipe';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    DashboardComponent,
    FooterComponent,
    BlogComponent,
    NotfoundComponent,
    DashboardDetailComponent,
    DashhoverDirective,
    SearchDashboardPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    ModalGalleryModule.forRoot(),
    HttpClientModule,
    FormsModule


  ],
  providers: [
      DashboardService,
      BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
