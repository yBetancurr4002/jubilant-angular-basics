import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { ThemeService } from './services/theme.service';

import { UsersComponent } from "./features/users/users.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jubilant-todo-app';
}
