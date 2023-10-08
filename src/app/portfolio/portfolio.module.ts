import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PortfolioModule { }
