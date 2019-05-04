import { Component, OnInit } from '@angular/core';

import { User } from './../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[];
  private searchedResults: User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUsers();
    //this.searchUsers(0);
  }

  getUsers():void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  addUser(username:string){
    if(!username){return;}
    this.userService.addUser({username} as User).subscribe(
      user=> {this.users.push(user);}
    );
  }

  deleteUser(user:User){    
    this.userService.deleteUser(user).subscribe();    
    this.users = this.users.filter(u => u != user);
  }
  
  updateUser(user:User, username:string){
    user.username = username;
    this.userService.updateUser(user).subscribe();
  }

  searchUsers(keyword:any):void{
    this.userService.searchUsers(keyword).subscribe(users => {this.searchedResults = users});
    
    /*users => {
      users.map(user => {
                this.searchedResults.push(user)
                })
    });*/
  }

}