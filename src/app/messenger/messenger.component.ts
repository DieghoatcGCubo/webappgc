import { Component, OnInit } from '@angular/core';

import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  constructor(private facebookService: FacebookService) { }

  ngOnInit(): void {
    this.initFacebookService();
  }
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v3.2'};
    this.facebookService.init(initParams);
  }

}
