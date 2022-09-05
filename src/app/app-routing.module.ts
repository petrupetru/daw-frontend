import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import { LicenseEditComponent } from './license-edit/license-edit.component';
import { LicenseComponent } from './license/license.component';
import { LoginComponent } from './login/login.component';
import { ProducersComponent } from './producers/producers.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: `producers`, component: ProducersComponent, canActivate:[AdminGuardGuard]},
  {path: `licenses`, component: LicenseComponent},
  {path: `detail/:id`, component: LicenseDetailComponent, canActivate: [AuthGuardGuard]},
  {path: ``, component: HomeComponent, canActivate:[AuthGuardGuard]},
  {path: `login`, component: LoginComponent},
  {path: `register`, component: RegisterComponent},
  {path: `admin`, component: AdminComponent, canActivate:[AdminGuardGuard]},
  {path: `licenseedit` ,component: LicenseEditComponent, canActivate:[AdminGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
