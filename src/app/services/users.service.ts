import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { User } from '../interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];
  url_api: string = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getAllUsers() {
    this.http.get<Users>(`${this.url_api}?page=1&per_page=20`)
      .subscribe(users => {
        if ( users.data instanceof Array )
          this.users = this.users.concat( users.data );
        else
          this.users.push( users.data );
      });
  }

  changeUsersList(id: any, data: User) {
    if (id === 'new') {
      const newID:number = this.users[this.users.length-1].id+1;
      data.id = newID;
      this.http.post<Users>(this.url_api, data, httpOptions);
      this.users.push(data);
    } else {
      const findIndex:number = this.users.findIndex(item => item.id === data.id)      
      this.http.put<Users>(`${this.url_api}/${id}`, data, httpOptions);
      this.users[findIndex] = data;
    }
  }

  removeUser(id: number) {
    this.http.delete<Users>(`${this.url_api}/${id}`, httpOptions);
    this.users = this.users.filter(item => item.id != id);
  }

}
