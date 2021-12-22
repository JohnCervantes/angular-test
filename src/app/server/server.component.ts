import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
{
  // alias "viewChild" is the name of the local reference on the html
  @ViewChild('viewChild') viewChild!: ElementRef;
  @Output() addServer = new EventEmitter<string>();

  randomArray = [1, 2, 3, 4];
  serverId = 10;
  serverStatus = 'offline';
  allowNewServer = false;
  randomBoolean = false;
  serverName = '';
  newServerName = '';
  @Input() serverNames: any;

  //lifecycle methods

  constructor() {
    console.log('Constructor called');
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ngOnChanges called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

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

  onAddServer(e: HTMLInputElement) {
    console.log(this.viewChild.nativeElement.value);
    this.addServer.emit(e.value);
  }

  onUpdateServerName(e: Event) {
    this.newServerName = (<HTMLInputElement>e.target).value;
  }
}
