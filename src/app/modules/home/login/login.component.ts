import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  title = 'rock paper scissors';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.logInForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login(): void {
    const { name } = this.logInForm.value;
    if (name) {
      this.authService.initUser(name);
    }
  }
}
