import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-fornecedor-consulta',
  templateUrl: './fornecedor-consulta.component.html',
  styleUrls: ['./fornecedor-consulta.component.css']
})
export class FornecedorConsultaComponent implements OnInit {
 
  fornecedores: any[] = [];
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
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
 
  onDelete(idFornecedor: number): void {
    if (window.confirm('Deseja realmente excluir o fornecedor?')) {
      this.httpClient.delete(environment.apiUrl + "api/fornecedores/" + idFornecedor,
        { responseType: 'text' })
        .subscribe({
          next: (result) => {
            this.mensagem = result;
            this.ngOnInit();
          },
          error: (e) => {
            console.log(e);
            this.mensagem = 'Ocorreu um erro, por favor tente novamente.';
          }
        })
    }
  }
 
}
 


