import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit, OnDestroy {

  public sensor: any;
  public lidar: any;

  private socket: any;

  constructor() {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.socket = new WebSocket('ws://35.183.23.210:8000/b');

    this.socket.onopen = (e) => {
      console.log('Connection established');
    };

    this.socket.onmessage = (event: any) => {
      const data = JSON.parse(event.data);
      this.sensor = data.sensor;
      this.lidar = data.lidar;
    };
  }

  ngOnDestroy() {
    this.socket.close(1000, 'Work complete');
  }

}
