import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { TokenInterceptor } from './_interceptors/token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuarioAutenticadoGuard } from './_guards/UsuarioAutenticado';
import { UsuarioNaoAutenticadoGuard } from './_guards/UsuarioNaoAutenticado';
 
import { AppComponent } from './app.component';
import { FornecedorCadastroComponent } from './fornecedor-cadastro/fornecedor-cadastro.component';
import { FornecedorConsultaComponent } from './fornecedor-consulta/fornecedor-consulta.component';
import { FornecedorEdicaoComponent } from './fornecedor-edicao/fornecedor-edicao.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoConsultaComponent } from './produto-consulta/produto-consulta.component';
import { ProdutoEdicaoComponent } from './produto-edicao/produto-edicao.component';
import { LoginComponent } from './login/login.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
 
@NgModule({
  declarations: [
    AppComponent,
    FornecedorCadastroComponent,
    FornecedorConsultaComponent,
    FornecedorEdicaoComponent,
    ProdutoCadastroComponent,
    ProdutoConsultaComponent,
    ProdutoEdicaoComponent,
    LoginComponent,
    CriarContaComponent,
    RecuperarSenhaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    UsuarioAutenticadoGuard,
    UsuarioNaoAutenticadoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
 

