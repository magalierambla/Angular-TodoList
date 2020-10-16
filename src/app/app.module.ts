import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ɵAPP_ROOT } from '@angular/core';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { ItemComponent } from './item/item.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RouteComponent } from './route/route.component';
import { TodoService } from './todo.service';
import { ListsComponent } from './lists/lists.component';

const appRouter:Routes=[
  {path:"home", component:AppComponent},
  {path:"connextion", component:ConnexionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ItemComponent,
    ConnexionComponent,
    RouteComponent,
    ListsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    RouterModule.forRoot(appRouter),
  ],
  exports:[MatToolbarModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
