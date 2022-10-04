import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-fornecedor-edicao',
  templateUrl: './fornecedor-edicao.component.html',
  styleUrls: ['./fornecedor-edicao.component.css']
})
export class FornecedorEdicaoComponent implements OnInit {
 
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }
 
  ngOnInit(): void {
 
    //capturar o id do fornecedor enviado pela URL
    const idFornecedor = this.activatedRoute.snapshot.paramMap.get('idFornecedor') as number | null;
 
    //consultando o fornecedor na API
    this.httpClient.get(environment.apiUrl + "api/fornecedores/" + idFornecedor)
      .subscribe({
        next: (result) => {
          this.formEdicao.patchValue(result);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }
 
  //criando a estrutura do formulário
  formEdicao = new FormGroup({
    //campo 'idFornecedor'
    idFornecedor: new FormControl('', []),
    //campo 'nome'
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    //campo 'cnpj'
    cnpj: new FormControl('', [Validators.required, Validators.minLength(14)])
  });
 
  //função para exibir as mensagens de validação
  get form(): any {
    return this.formEdicao.controls;
  }
 
  onSubmit(): void {
    //atualizando os dados do fornecedor
    this.httpClient.put(environment.apiUrl + "api/fornecedores", this.formEdicao.value,
      { responseType: 'text' })
      .subscribe({
        next: (result) => {
          this.mensagem = result;
        },
        error: (e) => {
          console.log(e);
          this.mensagem = 'Ocorreu um erro, tente novamente.';
        }
      })
  }
 
}
 


