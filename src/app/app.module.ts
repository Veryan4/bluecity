
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { SocketComponent } from './socket/socket.component';
import { TreeModule } from './tree/tree.module';
import { SharedModule } from './shared.module';
import { ChartsModule } from 'ng2-charts';
import { NgSpinnerModule } from 'ng-bootstrap-spinner';


@NgModule({
  declarations: [
    AppComponent,
    SocketComponent,
    ChartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChartsModule,
    FormsModule,
    NgbModule,
    RouterModule,
    TreeModule,
    SharedModule,
    NgSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
