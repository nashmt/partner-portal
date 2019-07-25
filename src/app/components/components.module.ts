import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeNavComponent } from './home-nav/home-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeNavComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeNavComponent
  ]
})
export class ComponentsModule { }
