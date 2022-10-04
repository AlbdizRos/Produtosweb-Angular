import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
 
@Injectable()
export class UsuarioNaoAutenticadoGuard implements CanActivate {
 
    canActivate() {
        //verificar se o usuário está autenticado
        if (localStorage.getItem('access_token') != null) {
            window.location.href = "/produto-consulta";
            return false;
        }
        else {
            return true;
        }
    }
}
 

