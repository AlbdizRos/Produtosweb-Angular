import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-fornecedor-cadastro',
  templateUrl: './fornecedor-cadastro.component.html',
  styleUrls: ['./fornecedor-cadastro.component.css']
})
export class FornecedorCadastroComponent implements OnInit {
 
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient
  ) {
 
  }
 
  ngOnInit(): void {
   
  }
 
  //criando a estrutura do formulário
  formCadastro = new FormGroup({
    //campo 'nome'
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    //campo 'cnpj'
    cnpj: new FormControl('', [Validators.required, Validators.minLength(14)])
  });
 
  //função para exibir as mensagens de validação
  get form(): any {
    return this.formCadastro.controls;
  }
 
  //função executada ao clicar no botão SUBMIT do formulário
  onSubmit(): void {
 
    this.httpClient.post(
      environment.apiUrl + 'api/fornecedores',
      this.formCadastro.value, { responseType: 'text' })
      .subscribe(
        {
          next: (res) => { //retorno de sucesso da API
            this.mensagem = res;
            this.formCadastro.reset();
          },
          error: (e) => { //retorno de erro da API
            console.log(e);
            this.mensagem = "Ocorreu um erro, tente novamente.";
          }
        }
      )
  }
 
}
 
 


