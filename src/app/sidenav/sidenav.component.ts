import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isCollapsed = true;
  chartIsView = true;
  socketIsView = false;
  treeIsView = false;

  constructor(
    private router: Router) {
    this.chartIsView = this.router.url === '/chart';
    this.socketIsView = this.router.url === '/socket';
    this.treeIsView = this.router.url === '/tree';
   }

  ngOnInit() {
  }

  switchView(link: string): void {
    this.router.navigate([link]);
  }

}
