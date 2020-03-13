import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SelectionComponent } from './selection/selection.component';
import { MainComponent } from './main.component';
import { ComponentsModule } from '../../components/components.module';
import { ProfileComponent } from './profile/profile.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [SelectionComponent, MainComponent, ProfileComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentsModule,
    CollapseModule,
    TabsModule,
    CarouselModule
  ]
})
export class MainModule { }
