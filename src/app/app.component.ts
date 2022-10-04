import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  isLoggedIn: boolean = false;
  emailUsuario: string = '';
 
  constructor() {
    //verificando se há um token salvo na localstorage
    if (localStorage.getItem('access_token') != null) {
      this.isLoggedIn = true;
      this.emailUsuario = localStorage.getItem('email_usuario') as string;
    }
  }
 
  //função para executar o logout do usuário
  logout(): void {
    if(window.confirm('Deseja realmente sair do sistema?')) {
 
      //apagar todos os dados salvos na localstorage
      localStorage.removeItem('access_token');
      localStorage.removeItem('email_usuario');
 
      //redirecionar de volta para a página de login
      window.location.href = '/login';
    }
  }
}
 


