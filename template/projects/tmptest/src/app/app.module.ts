import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RtTemplateModule } from 'projects/rt-template/src/lib/rt-template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RtTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
