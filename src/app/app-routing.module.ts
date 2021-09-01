import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ProfleComponent } from './profle/profle.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'profile', component : ProfleComponent},
  { path : 'aboutUs', component : AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
