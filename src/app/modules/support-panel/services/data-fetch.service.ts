import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService implements Resolve<any> {

  constructor(private mySrv: ProfileService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
   
    return this.mySrv.getAllUser();
  }

}
