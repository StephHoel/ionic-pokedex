import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CameraPreview } from "@awesome-cordova-plugins/camera-preview/ngx";
import { PipesModule } from "./pipes/pipes.module";

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,
    CameraPreview,
  AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
