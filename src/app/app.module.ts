import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';
import { ComponentsComponent } from './components/components.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent,
    ServicesComponent,
    ComponentsComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
