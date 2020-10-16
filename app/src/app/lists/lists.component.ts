import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-lists',
  template: `<div [ngSwitch]="qltag" class="d-flex m-0 p-0 col-12">
              <p *ngSwitchCase="'view'" (click)="modify()" class="font-weight-bolder  my-3" [style.color]="'rgb(118, 15, 214)'" > {{index+1}}) {{name| titlecase}} </p> 
              <input *ngSwitchCase="'edit'" class="col-11 p-1 my-2 mt-4 mx-1 rounded " (keypress)=onEnter($event) style="background-color:rgb(173, 223, 252);" >
            </div>
            <div *ngFor="let item of items; let num=index" class="bg-warning rounded mx-0 my-2 p-1 border border-secondary">
               <app-item class="p-0 m-0 d-flex" [task]="item"  (iditem)="delete(num)"></app-item>
            </div>
            <input *ngIf="addNewTask==true" (keydown)="onKeydown($event)" class="col my-1 mx-auto p-2 " />
            <button class="col my-3 mx-auto p-2 " 
            style="background-color:rgb(173, 223, 252); border:1px solid rgba(110, 101, 231, 0.808);" (click)="add($event)" mat-stroked-button color="primary">
              Add New Task
            </button> 
            `,
  styleUrls: []

})
export class ListsComponent implements OnInit {
  public qltag = "view";
  addNewTask = false;
  items = [];
  constructor(private item: TodoService) {
  }

  @Input()
  public datalist;
  @Input()
  public index;
  @Input()
  public name;

  ngOnInit() {
    this.items = this.datalist.elements;
    //console.log(this.datalist);
  }

  add(event) {
    this.addNewTask = true;
    console.log(event.target);
    console.log(this.index);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      let data = event.target.value.trim();
      if (data != null || data !== "") {
        this.items.push(data);
        this.addNewTask = false;
      }
    }
  }


  delete(idice) {
    this.items.splice(idice, 1);
  }

  modify() {
    this.qltag = "edit";
  }

  onEnter(event) {
    if (event.key === "Enter") {
      this.name = event.target.value.trim();
      this.qltag = "view";
    }
  }

}
