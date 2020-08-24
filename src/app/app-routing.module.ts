import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { TreeComponent } from './tree/tree.component';
import { SocketComponent } from './socket/socket.component';

const routes: Routes = [
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'tree',
    component: TreeComponent
  },
  {
    path: 'socket',
    component: SocketComponent
  },
  {
    path: '**',
    redirectTo: '/chart',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {}
