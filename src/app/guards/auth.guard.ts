import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

export interface GuideUser {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, GuideUser {
  name: string; //rule effect becuase guideuser

  constructor(
    private router: Router,
    private storageSrv: StorageService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log(route)

    if (!this.storageSrv.getToken()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true
  }

}
