import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  user: User = {
    "id": 999,
    "first_name": "",
    "last_name": "",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  };
  id: any;
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private Router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      const findIndex:number = this.usersService.users.findIndex(item => item.id === Number(params.id));
      if (params.id != 'new') {
        this.user = this.usersService.users[findIndex];
      }
    });
  }

  onSubmit(dataForm: NgForm) {
    this.usersService.changeUsersList(this.id, dataForm.value);
    this.Router.navigateByUrl('/');
  }

  removeUser(id: number) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.usersService.removeUser(id);
      this.Router.navigateByUrl('/');
    }
  }

}
