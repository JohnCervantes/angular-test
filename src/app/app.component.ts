import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css'],
})
export class AppComponent {
  title = 'lmao';
  serverNames = ['server1', 'server2', 'server3', 'server4'];

  onAddServer(serverName: string) {
    this.serverNames.push(serverName);
  }
}
