import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import(
        /*webpackChunkName: "homeModule" */ './modules/home/home.module'
      ).then((m) => m.HomeModule),
  },
  {
    path: 'game',
    loadChildren: () =>
      import(
        /*webpackChunkName: "gameModule" */ './modules/game/game.module'
      ).then((m) => m.GameModule),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
