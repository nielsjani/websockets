import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import {FormsModule} from '@angular/forms';

const stompConfig: StompConfig = {
  // Which server?
  url: 'ws://localhost:8090/gs-guide-websocket',
  headers: {},
  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 5000, // Typical value 20000 - every 20 seconds
  reconnect_delay: 5000,
  debug: false
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


