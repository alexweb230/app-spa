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
import { SearchPipe } from './pipes/search.pipe';
import {FormsModule} from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    DashboardComponent,
    FooterComponent,
    SearchPipe,
    BlogComponent,
    NotfoundpageComponent
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
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
