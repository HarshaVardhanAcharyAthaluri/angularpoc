import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>ROUTERS DEMO</h1>
  <button><a routerLink="/inbox" >INBOX</a></button>
  <button><a routerLink="/sent">SENT</a></button>
  
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  
}
