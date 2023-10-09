import { Component, OnInit } from '@angular/core';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'af-notification';
  tok =
    'dD3VnkE7TwQ8YcCLmSzxWo:APA91bHvHOSu2DYZVeE0StXeU0s6-7mkThNKz3E8Etp-LLPZ3g0zg8c0pEOeXGvBGAdzGhyWCevZ-PLmsDaxRgcNzvYdB9UKHI3LM6l78MvhgZoxOi9eV0apwiyu7pj1pZsPzuDzvDI8';
  message: any = null;
  constructor() {}
  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }
  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging)
      .then((currentToken) => {
        if (currentToken) {
          console.log('Hurraaa!!! we got the token.....');
          console.log('token :' + currentToken);
        } else {
          console.log(
            'No registration token available. Request permission to generate one.'
          );
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message = payload;
      alert(
        this.message['notification'].title +
          '\n' +
          this.message['notification'].body
      );
    });
  }
}
