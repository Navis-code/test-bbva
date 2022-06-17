import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { GameService } from './services/game.service';
import { ModalGameSelectionComponent } from './components/modal-game-selection/modal-game-selection.component';

@NgModule({
  declarations: [GameComponent, UserProfileComponent, ModalGameSelectionComponent],
  providers: [GameService],
  imports: [CommonModule, GameRoutingModule],
})
export class GameModule {}
