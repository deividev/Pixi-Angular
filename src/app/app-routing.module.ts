import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MapGame } from './scenes/map-game/map-game.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path: '/map',
    component: MapGame,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
