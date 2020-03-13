import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectionComponent } from './selection/selection.component';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../../shared/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'selection', component: SelectionComponent, canActivate: [AuthGuard]},
      {path: 'profiles', component: ProfileComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
