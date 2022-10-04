import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {
 
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
  ngOnInit(): void {
  }
 
  formRecuperarSenha = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
 
  get form(): any {
    return this.formRecuperarSenha.controls;
  }
 
  onSubmit(): void {
    this.httpClient.post(
      environment.apiUrl + "api/recuperar-senha",
      this.formRecuperarSenha.value,
      { responseType: 'text' }
    )
      .subscribe({
        next: (result) => {
          this.mensagem = result;
          this.formRecuperarSenha.reset();
        },
        error: (e) => {
          this.mensagem = e.error;
        }
      })
  }
}
 


