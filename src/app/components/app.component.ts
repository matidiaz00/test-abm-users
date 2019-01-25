import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getAllUsers();
  }

}
