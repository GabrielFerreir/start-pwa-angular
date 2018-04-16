import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  usuarios: any;

  constructor(private http: Http) {
    this.getUsers();
  }

  getUsers() {
    const response = this.http.get('http://localhost:3000/user')
      .subscribe(
        res => {
          this.usuarios = res.json();
          console.log(this.usuarios);
        },
        err => {
          console.log('Erro ao carregar usuario');
        }
      );
  }
}
