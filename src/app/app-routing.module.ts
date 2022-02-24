import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchImagesComponent } from './search-images/search-images.component';

const routes: Routes = [

{ path: 'buscador', component: SearchImagesComponent },   
{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }