import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
    { path: "login/", component: Login },
    { path: "", component: Dashboard },
];
