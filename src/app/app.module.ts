import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './firbase-config';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { initializeApp } from 'firebase/app';
initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireMessagingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
