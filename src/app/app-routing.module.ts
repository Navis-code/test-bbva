import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
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
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
