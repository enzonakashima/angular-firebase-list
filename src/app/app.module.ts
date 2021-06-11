import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';
import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'firelist', component: FirelistComponent }
    ]),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDhfTQ-PoW_DakvmxAVgMQT2yERv6vL0Ps',
      authDomain: 'angularlistapp.firebaseapp.com',
      projectId: 'angularlistapp',
      storageBucket: 'angularlistapp.appspot.com',
      messagingSenderId: '1019031567513',
      appId: '1:1019031567513:web:8fe3ba710196ed570c0c08'
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    IndexComponent,
    FirelistComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthService]
})
export class AppModule {}
