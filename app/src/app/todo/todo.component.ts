import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TodoService } from '../todo.service';
import { Item } from '../item/item.component';

export class TodoList {
  constructor(public name: string, elements: Item[]) { }
}

@Component({
  selector: 'app-todo',
  template: `
          <div class="row d-flex justify-content-end">
            <button  mat-raised-button color="accent" class="mr-2" (click)="save()"> Save changes</button>
            <button class="mr-5 border border-danger" mat-stroked-button color="warn" (click)="signout()">Sing out</button>
          </div>
          <div class='container flex-wrap d-flex justify-content-around '>
          <div *ngFor="let i of list; let num=index" class="shadow col-md-3 col-sm-12 m-4 border border-secondary rounded d-flex" [style.background-color]="'rgba(204, 204, 204, 0.808)'">
          <button mat-mini-fab color="warn" style="position:absolute; right:-8px;" (click)="delete(num)"><i class="fas fa-times p-0"></i></button> 
          <app-lists [datalist]="i" [index]="num" [name]="i.name"  style="z-index=-100; min-height:400px" class="col-12" ></app-lists>  
          </div>
          <div class="shadow col-md-3 col-sm-12 m-4 border border-secondary rounded  d-flex justify-content-center" [style.background-color]="'rgba(204, 204, 204, 0.808)'" (click)="addList()" >
            <i class="fas fa-plus-circle m-auto " [ngStyle]="{'font-size':'60px', 'color':'rgb(173, 223, 252)','text-shadow':'1px 1px 2px grey, -1px -1px 2px grey'}"></i>
          </div>
          </div>
          `,
  styleUrls: []
})
export class TodoComponent implements OnInit {
  public qltag = "view";
  public list;
  public num = 0;
  public data: any;

  @Output()
  public deconnexion:EventEmitter<any> = new EventEmitter<any>();

  @Input()
  public search;
  constructor(private listservice: TodoService) {
  }

  addList() {
    this.list.push({ 'name': "Enter Title", "elements": [] });
  }

  delete(num) {
    if (confirm("Are you sure to delete this list?")) {
      this.list.splice(num, 1);
    }
  }
  signout() {
    this.deconnexion.emit(false);
  }

  do(){
    this.listservice.getList().subscribe(req => { this.data = req; this.list = req.todoListes; localStorage.setItem("download","No")}, error => console.log(error), () => console.log('Fini !'));
  }

  ngOnInit() {
    this.do();
  }

  save() {
    this.data.todoListes = this.list;
    this.listservice.sendList(this.data).subscribe(res => console.log("saved object "), error => console.log(" error in post"));
  }
}
