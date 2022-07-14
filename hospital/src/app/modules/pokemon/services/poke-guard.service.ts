import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable(
)
export class PokeGuardService implements CanActivate {


  constructor(private router:Router ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!getToken()){
      alert('You are not authorized to visit this page. You are redirected to login Page');
      this.router.navigate(["auth"],{ queryParams: { retUrl: route.url} });
      return false;
    }
    return true;
  }
}

const getToken = ()=>
{
  console.log(window.localStorage.getItem("token"))
return window.localStorage.getItem("token")
}
