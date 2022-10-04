import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { UsuarioAutenticadoGuard } from "./_guards/UsuarioAutenticado";
import { UsuarioNaoAutenticadoGuard } from "./_guards/UsuarioNaoAutenticado";
 
//importando os componentes do projeto
import { FornecedorCadastroComponent } from "./fornecedor-cadastro/fornecedor-cadastro.component";
import { FornecedorConsultaComponent } from "./fornecedor-consulta/fornecedor-consulta.component";
import { FornecedorEdicaoComponent } from "./fornecedor-edicao/fornecedor-edicao.component";
 
import { ProdutoCadastroComponent } from "./produto-cadastro/produto-cadastro.component";
import { ProdutoConsultaComponent } from "./produto-consulta/produto-consulta.component";
import { ProdutoEdicaoComponent } from "./produto-edicao/produto-edicao.component";
 
import { LoginComponent } from "./login/login.component";
import { CriarContaComponent } from "./criar-conta/criar-conta.component";
import { RecuperarSenhaComponent } from "./recuperar-senha/recuperar-senha.component";
 
//mapeamento das rotas
const routes: Routes = [
    { path: 'fornecedor-cadastro', component: FornecedorCadastroComponent, canActivate: [UsuarioAutenticadoGuard] },
    { path: 'fornecedor-consulta', component: FornecedorConsultaComponent, canActivate: [UsuarioAutenticadoGuard] },
    { path: 'fornecedor-edicao/:idFornecedor', component: FornecedorEdicaoComponent, canActivate: [UsuarioAutenticadoGuard] },
    { path: 'produto-cadastro', component: ProdutoCadastroComponent, canActivate: [UsuarioAutenticadoGuard] },
    { path: 'produto-consulta', component: ProdutoConsultaComponent, canActivate: [UsuarioAutenticadoGuard] },
    { path: 'produto-edicao/:idProduto', component: ProdutoEdicaoComponent, canActivate: [UsuarioAutenticadoGuard] },
    { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
    { path: 'criar-conta', component: CriarContaComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
    { path: 'recuperar-senha', component: RecuperarSenhaComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
];
 
//registrando a configuração
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }
 
 
 

