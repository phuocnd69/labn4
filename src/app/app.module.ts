import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { DishMenuComponent } from './dish-menu/dish-menu.component';

@NgModule({
  imports:      [ AppRoutingModule,BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AdminComponent, DashboardComponent, DashboardManagerComponent, DishMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
