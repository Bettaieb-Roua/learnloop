import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [AppComponent,  PopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthGuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
