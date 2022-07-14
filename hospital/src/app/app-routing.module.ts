import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes} from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { PokemonModule } from './modules/pokemon/pokemon.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
];

@NgModule({
  imports: [AuthModule,PokemonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
