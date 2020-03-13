import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FooterComponent } from './footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MovieListComponent } from './movie-list/movie-list.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MovieListComponent],
  exports: [HeaderComponent, FooterComponent, MovieListComponent],
  imports: [FormsModule, RouterModule, CollapseModule, BsDropdownModule, CommonModule]
})
export class ComponentsModule { }
