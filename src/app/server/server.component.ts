import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['../../styles.css'],
})
export class ServerComponent implements OnInit {
  randomArray = [1, 2, 3, 4];
  serverId = 10;
  serverStatus = 'offline';
  allowNewServer = false;
  randomBoolean = false;
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {}

  onAddMoreStuff() {
    this.randomArray.push(Math.random());
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.randomBoolean = !this.randomBoolean;
    console.log(this.randomBoolean);
  }

  onUpdateServer(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  getColor() {
    return 'bg-green-100';
  }
}
