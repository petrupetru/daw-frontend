import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import { LicenseComponent } from './license/license.component';
import { ProducersComponent } from './producers/producers.component';

const routes: Routes = [
  {path: `producers`, component: ProducersComponent},
  {path: `licenses`, component: LicenseComponent},
  {path: `detail/:id`, component: LicenseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
