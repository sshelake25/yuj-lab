import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface GuideUser {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, GuideUser {
  name: string; //rule effect becuase guideuser

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    alert(1);
    return true;

  }

}
