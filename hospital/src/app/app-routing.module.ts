import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './custom-modules/auth/auth.module';
import { UsersModule } from './custom-modules/users/users.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./custom-modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./custom-modules/users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [AuthModule, UsersModule ,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
