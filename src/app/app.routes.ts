import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'dashboard', canActivate: [authGuard], component: Dashboard },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },
];
