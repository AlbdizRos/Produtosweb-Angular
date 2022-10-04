import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-produto-consulta',
  templateUrl: './produto-consulta.component.html',
  styleUrls: ['./produto-consulta.component.css']
})
export class ProdutoConsultaComponent implements OnInit {
 
  produtos: any[] = [];
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl + "api/produtos")
      .subscribe({
        next: (result) => {
          this.produtos = result as any[];
        },
        error: (e) => {
          console.log(e);
        }
      })
  }
 
  onDelete(idProduto: number): void {
    if(window.confirm('Deseja realmente excluir o produto selecionado?')) {
      this.httpClient.delete(environment.apiUrl + "api/produtos/" + idProduto,
        { responseType: 'text' })
        .subscribe({
          next: (result) => {
            this.mensagem = result;
            this.ngOnInit();
          },  
          error: (e) => {
            console.log(e);
            this.mensagem = "Ocorreu um erro. Tente novamente.";
          }
        })
    }
  }
 
}
 


