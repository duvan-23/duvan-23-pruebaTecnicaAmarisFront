import { Routes } from '@angular/router';
import { AboutComponent } from '@info/pages/about/about.component';
import {HomeComponent} from '@info/pages/home/home.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo:'/'
    }
];
