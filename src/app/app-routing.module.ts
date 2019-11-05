import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './book/home/home.component';
import {ViewComponent} from './book/view/view.component';
import {CreateComponent} from './book/create/create.component';
import {DeleteComponent} from './book/delete/delete.component';
import {EditComponent} from './book/edit/edit.component';


const routes: Routes = [
  {
    path: 'homeBook',
    component: HomeComponent
  },
  {
    path: 'homeBook/viewBook/:id',
    component: ViewComponent
  },

  {
    path: 'homeBook/createBook',
    component: CreateComponent
  },
  {
    path: 'homeBook/deleteBlog/:id',
    component: DeleteComponent
  },
  {
    path: 'homeBook/editBlog/:id',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
