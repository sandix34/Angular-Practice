import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {AboutComponent} from './modules/general/about/about.component';
import {ContactComponent} from './modules/general/contact/contact.component';
import {HomeComponent} from './modules/general/home/home.component';
import {NotFoundComponent} from './modules/general/not-found/not-found.component';
import {SigninComponent} from './modules/general/signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: NotFoundComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
