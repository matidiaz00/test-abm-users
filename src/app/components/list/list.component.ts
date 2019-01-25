import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  constructor(private usersService: UsersService) {}

  ngOnInit() { }

  removeUser(id: number) {
    confirm("Are you sure you want to delete this user?") ? this.usersService.removeUser(id) : '';
  }

}
