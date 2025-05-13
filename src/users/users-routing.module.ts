import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent, UsersProfileComponent } from '.';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: UsersProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
