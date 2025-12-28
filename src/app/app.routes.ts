import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { authGuardGuard } from './auth/guard/auth-guard-guard';

export const routes: Routes = [
    { path: " ", redirectTo: "login" },
    { path: "login", component: Login },
    { path: "dashboard", canActivate: [authGuardGuard], component: Dashboard },
];
