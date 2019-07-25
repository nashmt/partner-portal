import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const routes: Routes =[

  { path: '',
    component: HomeLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/home-layout/home-layout.module#HomeLayoutModule'

    }]
  },
   {
    path: 'admin',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full',
  }, {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [{
      path: 'admin',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  } 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
