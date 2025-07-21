import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from '../../models/user.model';
import { Task } from '../../models/task.model';
import { UsersService } from '../../services/users.service';
import { UserListComponent } from "./components/user-list/user-list.component";

@Component({
  selector: 'app-users',
  imports: [CommonModule, UserListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  selectedUser: User | null = null;
  tasks: Task[] = [];
  isDarkTheme = true;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const classList = document.body.classList;
    classList.toggle('dark-theme', this.isDarkTheme);
    classList.toggle('light-theme', !this.isDarkTheme);
}


  constructor(private usersService: UsersService) {}

  onUserSelected(user: User) {
    this.selectedUser = user;
    this.usersService.getTasksByUser(user.id).subscribe(tasks => (this.tasks = tasks));
  }
}
