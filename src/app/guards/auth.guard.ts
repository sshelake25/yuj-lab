import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface GuideUser {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, GuideUser {
  name: string; //rule effect becuase guideuser

  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log(route)

    let details = localStorage.getItem('loginInfo');

    // if (details && Object.keys(details).length > 0) { //user is logged or not
    //   this.router.navigate(['/templates']);
    //   return true;
    // }

    // this.router.navigate(['/login']);
    // return false;



    if (route.data && route.data["role"] !== 'admin') {
      return false;
    }

    return true

  }

}
