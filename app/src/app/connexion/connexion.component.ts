import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: []
})
export class ConnexionComponent implements OnInit {
  disabled: boolean = true;
  username;
  password;
  Spassword;
  Susername;
  confpassword;
  public logedin: boolean = false;

  @Output()
  public status: EventEmitter<any> = new EventEmitter<any>();

  constructor(private connexionservice: TodoService) { }

  ngOnInit() {
  }

  check(userName, password, confpassword) {
    if (userName != null && password == confpassword) {
      this.disabled = false;
    } else {
      this.disabled = true;
    };
  }

  signup(us,ps) {
    this.connexionservice.inscription(us,ps).subscribe(res =>console.log(" inscription reussie !"));
    this.singin(us,ps);
  }

  singin(us, ps) {
    this.connexionservice.connectMe(us, ps).subscribe(() => { this.logedin = true, this.status.emit( localStorage.getItem("download"))}, error => console.log(error), () => console.log('Fini !'));
    
  }
}
