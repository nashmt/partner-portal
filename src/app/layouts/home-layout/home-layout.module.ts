import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeLayoutRoutes } from './home-layout.routing';
import { DashboardComponent } from '../../admin_components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../shared_components/user-profile/user-profile.component';
import { TableListComponent } from '../../shared_components/table-list/table-list.component';
import { TypographyComponent } from '../../shared_components/typography/typography.component';
import { IconsComponent } from '../../shared_components/icons/icons.component';
import { MapsComponent } from '../../shared_components/maps/maps.component';
import { NotificationsComponent } from '../../shared_components/notifications/notifications.component';
import { UpgradeComponent } from '../../shared_components/upgrade/upgrade.component';

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
    UpgradeComponent
    
  ]
})

export class HomeLayoutModule {}
