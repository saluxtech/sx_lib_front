import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredRoles: string[] = route.data['roles'] || []; 
    const userRoles: string[] = this.authService.getUserRoles();

    if (this.hasRequiredRole(requiredRoles, userRoles)) {
      return true;
    }

    this.router.navigate(['/unauthorized']);
    return false;
  }

  private hasRequiredRole(requiredRoles: string[], userRoles: string[]): boolean {
    return requiredRoles.some(role => userRoles.includes(role));
  }
}
