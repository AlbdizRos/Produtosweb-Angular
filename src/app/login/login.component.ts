import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
  ngOnInit(): void {
  }
 
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
 
  get form(): any {
    return this.formLogin.controls;
  }
 
  onSubmit(): void {
 
    this.httpClient.post(
      environment.apiUrl + "api/login",
      this.formLogin.value,
      { responseType: 'text' }
    )
      .subscribe({
        next: (result) => {
          //salvar o token na sessão do navegador
          localStorage.setItem("access_token", result);
          //salvar o email do usuário na sessão do navegador
          localStorage.setItem("email_usuario", this.formLogin.value.email as string);
          //redirecionar para a consulta de produtos
          window.location.href = '/produto-consulta';
        },
        error: (e) => {
          this.mensagem = e.error;
        }
      })
 
  }
}
 


