import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {
 
  fornecedores: any[] = [];
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
  //criando a estrutura do formulário
  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    preco: new FormControl('', [Validators.required]),
    quantidade: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    idFornecedor: new FormControl('', [Validators.required]),
  });
 
  //função para exibir as mensagens de validação
  get form(): any {
    return this.formCadastro.controls;
  }
 
  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl + "api/fornecedores")
      .subscribe({
        next: (result) => {
          this.fornecedores = result as any[];
        },
        error: (e) => {
          console.log(e);
        }
      })
  }
 
  onSubmit(): void {
    this.httpClient.post(environment.apiUrl + "api/produtos", this.formCadastro.value,
      { responseType : 'text' })
      .subscribe({
        next: (result) => {
          this.mensagem = result;
          this.formCadastro.reset();
        },
        error: (e) => {
          console.log(e);
          this.mensagem = "Ocorreu um erro, tente novamente.";
        }
      })
  }
 
}
 


