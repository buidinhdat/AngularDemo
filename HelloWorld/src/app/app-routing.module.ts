import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { QuanLyAccountComponentComponent } from './Views/quan-ly-account-component/quan-ly-account-component.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"qlAccount",component:QuanLyAccountComponentComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
