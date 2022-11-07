import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './service/api.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusCreateComponent } from './components/bus-create/bus-create.component';
import { BusEditComponent } from './components/bus-edit/bus-edit.component';
import { BusListComponent } from './components/bus-list/bus-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BusCreateComponent,
    BusEditComponent,
    BusListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
