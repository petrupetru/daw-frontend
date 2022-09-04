import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import { LicenseComponent } from './license/license.component';
import { LoginComponent } from './login/login.component';
import { ProducersComponent } from './producers/producers.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: `producers`, component: ProducersComponent},
  {path: `licenses`, component: LicenseComponent},
  {path: `detail/:id`, component: LicenseDetailComponent},
  {path: ``, component: HomeComponent, canActivate:[AuthGuardGuard]},
  {path: `login`, component: LoginComponent},
  {path: `register`, component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
