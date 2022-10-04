import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
 
@Injectable()
export class UsuarioAutenticadoGuard implements CanActivate {
 
    canActivate() {
        //verificar se o usuário está autenticado
        if (localStorage.getItem('access_token') != null)
            return true;
        else {
            window.location.href = "/login";
            return false;
        }
    }
}


