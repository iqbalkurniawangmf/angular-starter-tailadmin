import { Routes } from '@angular/router';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
// import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
// import { BlankComponent } from './pages/blank/blank.component';
// import { ProfileComponent } from './pages/profile/profile.component';
// import { CalenderComponent } from './pages/calender/calender.component';
// import { InvoicesComponent } from './pages/invoices/invoices.component';
// import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
// import { LineChartComponent } from './pages/charts/line-chart/line-chart.component';
// import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
// import { AlertsComponent } from './pages/ui-elements/alerts/alerts.component';
// import { AvatarElementComponent } from './pages/ui-elements/avatar-element/avatar-element.component';
// import { BadgesComponent } from './pages/ui-elements/badges/badges.component';
// import { ButtonsComponent } from './pages/ui-elements/buttons/buttons.component';
// import { ImagesComponent } from './pages/ui-elements/images/images.component';
// import { VideosComponent } from './pages/ui-elements/videos/videos.component';

export const routes: Routes = [

  // HARD REDIRECT
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/ecommerce/ecommerce.component').then(m => m.EcommerceComponent)
      },
      {
        path: 'calendar',
        loadComponent: () => import('./pages/calender/calender.component').then(m => m.CalenderComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: 'form-elements',
        loadComponent: () => import('./pages/forms/form-elements/form-elements.component').then(m => m.FormElementsComponent)
      },
      {
        path: 'basic-tables',
        loadComponent: () => import('./pages/tables/basic-tables/basic-tables.component').then(m => m.BasicTablesComponent)
      },
      {
        path: 'blank',
        loadComponent: () => import('./pages/blank/blank.component').then(m => m.BlankComponent)
      }, 
    ]
  },
  // auth pages
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth-pages/sign-in/sign-in.component').then(m => m.SignInComponent),
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/auth-pages/sign-up/sign-up.component').then(m => m.SignUpComponent),
  },
  // error pages
  {
    path: '**',
    loadComponent: () => import('./pages/other-page/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
