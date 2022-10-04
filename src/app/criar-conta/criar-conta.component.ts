import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {
 
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
  ngOnInit(): void {
  }
 
  formCriarConta = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
 
  get form(): any {
    return this.formCriarConta.controls;
  }
 
  onSubmit(): void {
 
    this.httpClient.post(
      environment.apiUrl + "api/criar-conta",
      this.formCriarConta.value,
      { responseType: 'text' }
    )
      .subscribe({
        next: (result) => {
          this.mensagem = result;
          this.formCriarConta.reset();
        },
        error: (e) => {
          this.mensagem = e.error;
        }
      })
  }
}
 


