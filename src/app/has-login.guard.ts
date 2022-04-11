import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HasLoginGuard implements CanActivate {
  http: any;

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    if (!localStorage.getItem('auth')) {
      this.router.navigate(['/login']);
      return false;
    }

    return true
  }
}
