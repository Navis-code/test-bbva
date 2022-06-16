import { Component, Input, OnInit } from '@angular/core';
import { UserI } from '../../../../models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  @Input() currentUser!: UserI | null;
  @Input() updateUserFunction!: (args: UserI) => void;

  constructor() {}

  ngOnInit(): void {}
}
