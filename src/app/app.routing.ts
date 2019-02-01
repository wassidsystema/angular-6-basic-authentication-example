import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componente/home/home.component';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { HeaderComponent } from './componente/header/header.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', component: HeaderComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);