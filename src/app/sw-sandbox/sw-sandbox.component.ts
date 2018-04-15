import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';


@Component({
  selector: 'app-sw-sandbox',
  templateUrl: './sw-sandbox.component.html',
  styleUrls: ['./sw-sandbox.component.scss']
})
export class SwSandboxComponent implements OnInit {

  VAPID_PUBLIC_KEY: string;

  constructor(private swPush: SwPush) { }

  ngOnInit() {

    this.VAPID_PUBLIC_KEY = 'BAjDL342V7SFFfe5iEzj54Lg2di3SJaUMyRqf8XdrFwO4p7D2pxnqDXj3i8s6SFeH6QIzTYsmJc_q8vmjnVK3EA';
  }

  subscribeToPush() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(pushSubscription => {
        console.log(pushSubscription);
        console.log(JSON.stringify(pushSubscription));
      })
      .catch(err => {
        console.error(err);
      })
  }

  unsubscribeFromPush() {

  }

}
