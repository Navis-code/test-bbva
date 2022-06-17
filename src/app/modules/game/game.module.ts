import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [GameComponent, UserProfileComponent],
  providers: [GameService],
  imports: [CommonModule, GameRoutingModule],
})
export class GameModule {}
