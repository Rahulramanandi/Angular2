import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log('Users loaded:', this.users);
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}
