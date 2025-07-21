import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../../models/user.model';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [];
  @Output() userSelected = new EventEmitter<User>();

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }

  selectUser(user: User) {
    this.userSelected.emit(user);
  }
}
