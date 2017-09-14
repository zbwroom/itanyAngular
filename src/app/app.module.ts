import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { DatabindComponent } from './databind/databind.component';
import { DirComponent } from './dir/dir.component';

@NgModule({
    
  declarations: [
    AppComponent,
    TemplateComponent,
    DatabindComponent,
    DirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
