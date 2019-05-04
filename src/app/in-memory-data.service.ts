import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root',})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let USERS = [
      {id: 1, username: 'sauna'},
      {id: 2, username: 'omena'},
      {id: 3, username: 'aurinko'},
      {id: 4, username: 'juusto'},
      {id: 5, username: 'perkele'},
      {id: 6, username: 'ohohoh'},
      {id: 7, username: 'nokia'},
    ];
    return {USERS};
  }
  constructor() { }

}