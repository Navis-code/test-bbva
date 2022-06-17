import { Component, Input, OnInit } from '@angular/core';
import { GameI } from '../../../../models/Game';

@Component({
  selector: 'app-modal-game-selection',
  templateUrl: './modal-game-selection.component.html',
  styleUrls: ['./modal-game-selection.component.css'],
})
export class ModalGameSelectionComponent implements OnInit {
  @Input() showModal = false;
  @Input() gamesAvailable: GameI[] = [];
  @Input() changeGameFunction!: (args: GameI) => void;

  constructor() {}

  ngOnInit(): void {}
}
