import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class authGuardGuard implements CanActivate {

  constructor(private router: Router, private userService:UserService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.userService.getUsernameValue();

    if (isAuthenticated !== null) {
      // User is authenticated
      return true;
    } else {
      // User is not authenticated, redirect to login page
      this.router.navigate(['/user-auth/login']);
      return false;
    }
  }};