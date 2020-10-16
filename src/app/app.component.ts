import { Component, Input } from '@angular/core';
import { TodoService } from './todo.service'
import { getMatInputUnsupportedTypeError } from '@angular/material';
import {TodoComponent} from './todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public search;
  public todo:TodoComponent;
  public auth: boolean = false;
  constructor(private listservice: TodoService) { }

  ngOnInit() {
    /*
    if(localStorage.getItem("download")==="No"){
    this.auth=true;
    this.todo.do();
    }
  */
  }

  show() {
    this.auth = true;
  }

  deconnecte() {
    this.auth = false;
    localStorage.removeItem("charged");
    localStorage.removeItem("notallow");
    localStorage.removeItem("download");
  }
}
