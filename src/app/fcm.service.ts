import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Injectable({
  providedIn: 'root',
})
export class FcmService {
  constructor(private angularFireMessaging: AngularFireMessaging) {}

  async requestPermission() {}
}
