import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusCreateComponent } from './components/bus-create/bus-create.component';
import { BusEditComponent } from './components/bus-edit/bus-edit.component';
import { BusListComponent } from './components/bus-list/bus-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-bus' },
  { path: 'create-bus', component: BusCreateComponent },
  { path: 'edit-bus/:id', component: BusEditComponent },
  { path: 'bus-list', component: BusListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
