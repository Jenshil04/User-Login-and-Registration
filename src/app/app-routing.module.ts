import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistraionPageComponent } from './registraion-page/registraion-page.component';

const routes: Routes = [
{
  component:LoginPageComponent,
  path:"login-page"
},
{
  component:RegistraionPageComponent,
  path:"registration-page"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
