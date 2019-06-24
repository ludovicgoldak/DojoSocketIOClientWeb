import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatComponent} from './chat.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {ConsoleChatComponent} from './console-chat/console-chat.component';
import {ConsoleModule} from '../../features/console/console.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserListComponent} from './user-list/user-list.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [ChatComponent, ConsoleChatComponent, UserListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    BrowserModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    ConsoleModule,
  ],
})
export class ChatModule {
}
