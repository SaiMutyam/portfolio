import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
    { path: '', component: IndexComponent }, // Landing page
    // { path: 'portfolio/profile', redirectTo: 'portfolio/profile', pathMatch: 'full'},
  // { path: 'portfolio', redirectTo: 'portfolio/index', pathMatch: 'full'},
  { path: 'portfolio/profile', component: IndexComponent },
  { path: 'portfolio/academic', component: ViewComponent },
  { path: 'portfolio/projects', component: ProjectsComponent},
  {path: 'portfolio/certifications' , component: CertificationsComponent  },
  { path: 'portfolio/contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
