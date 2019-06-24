import {RouterModule} from '@angular/router';
import {LoginModule} from './pages/login/login.module';
import {SignupModule} from './pages/signup/signup.module';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {AppComponent} from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ROUTES} from './app.routes';
import {ChatModule} from './pages/chat/chat.module';

const config: SocketIoConfig = {url: 'http://127.0.0.1:8001', options: {}};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SocketIoModule.forRoot(config),
    LoginModule,
    SignupModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ChatModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
