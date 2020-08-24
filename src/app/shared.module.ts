import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
  providers: [
  ]
})
export class SharedModule {}
