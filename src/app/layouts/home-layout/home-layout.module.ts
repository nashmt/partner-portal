import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeLayoutRoutes } from './home-layout.routing';
<<<<<<< HEAD
import { DashboardComponent } from '../../admin_components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../shared_components/user-profile/user-profile.component';
import { TableListComponent } from '../../shared_components/table-list/table-list.component';
import { TypographyComponent } from '../../shared_components/typography/typography.component';
import { IconsComponent } from '../../shared_components/icons/icons.component';
import { MapsComponent } from '../../shared_components/maps/maps.component';
import { NotificationsComponent } from '../../shared_components/notifications/notifications.component';
import { UpgradeComponent } from '../../shared_components/upgrade/upgrade.component';
import { NavigationComponent } from '../../shared_components/home-nav/home-nav.component';

=======
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
//import { HomeNavComponent } from '../../components/home-nav/home-nav.component';
>>>>>>> 0031416861d11034e59fe14054d2d841ec9eff04

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    NavigationComponent
  ]
})

export class HomeLayoutModule {}
