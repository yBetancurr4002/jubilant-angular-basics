import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?img=1', role: 'Admin' },
    { id: 2, name: 'Bob', avatarUrl: 'https://i.pravatar.cc/150?img=2', role: 'User' },
  ];

  private tasks: Task[] = [
    { id: 1, title: 'Task A', description: 'Do something', status: 'pending', userId: 1 },
    { id: 2, title: 'Task B', description: 'Another task', status: 'done', userId: 1 },
    { id: 3, title: 'Task C', description: 'User task', status: 'in-progress', userId: 2 },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getTasksByUser(userId: number): Observable<Task[]> {
    return of(this.tasks.filter(task => task.userId === userId));
  }
}
