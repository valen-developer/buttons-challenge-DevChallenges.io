import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { ButtonsComponent } from './components/pages/buttons/buttons.component';
import { InputsComponent } from './components/pages/inputs/inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ButtonsComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
