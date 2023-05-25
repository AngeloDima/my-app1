import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaDettailComponent } from './pizze/pizza-dettail/pizza-dettail.component';
import { PizzeComponent } from './pizze/pizze.component';

const routes: Routes = [
  {
    path: "",
    component: PizzeComponent
  },

  {
    path: "pizza/:nome",
    component: PizzaDettailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
