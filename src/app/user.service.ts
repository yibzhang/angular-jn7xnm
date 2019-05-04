import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn:'root'})
export class UserService{
  private usersUrl = 'api/USERS';

  constructor(private http: HttpClient){}

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }

  deleteUser(user:User):Observable<User>{
    return this.http.delete<User>(
      `${this.usersUrl}/${user.id}`,
      httpOptions
    );
  }

  updateUser(user:User):Observable<any>{
    return this.http.put<User>(`${this.usersUrl}/${user.id}`, user, httpOptions);
  }

  searchUsers(keyword:any):Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl+this.searchString(keyword));
  }

  searchString(keyword:any):string{
    return isNaN(keyword)? "?username=^.*"+keyword:"?id="+keyword;
  }
}

