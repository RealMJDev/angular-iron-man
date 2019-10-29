import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import { ReadComponent } from './components/read/read.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'read', component: ReadComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent, ReadComponent, ContactComponent]
