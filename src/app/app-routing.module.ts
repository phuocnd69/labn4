import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { HomeComponent } from './home/home.component';
import { DishMenuComponent } from './dish-menu/dish-menu.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent,
  children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboard-manager', component: DashboardManagerComponent}
  ]
  },
  {path: 'add-dish', component: AddDishComponent},
  {path: 'menu', component: DishMenuComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}