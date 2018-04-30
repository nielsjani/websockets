import {Component} from '@angular/core';
import {StompService} from '@stomp/ng2-stompjs';
import 'rxjs/add/operator/map'
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  connected: boolean = false;
  private stompSubscription: Subscription;
  messages: any[] = [];
  name;

  constructor(private _stompService: StompService) {}

  connect() {
    this.connected = true;
    this.stompSubscription = this._stompService.subscribe('/topic/greetings')
      .subscribe(message => this.messages.push(JSON.parse(message.body)));
  }

  disconnect() {
    this.connected = false;
    this.stompSubscription.unsubscribe();
  }

  sendName($event) {
    $event.preventDefault();
    this._stompService.publish('/app/hello', JSON.stringify({name: this.name}));
    this.name = undefined;
  }



}

