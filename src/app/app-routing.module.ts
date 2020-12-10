import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ItemsComponent } from './components/items/items.component';


const routes: Routes = [
  {
    path: '',
    component: ItemsComponent
  },
  {
    path: ':query',
    component: ItemsComponent
  },
  {
    path: 'detalle/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
