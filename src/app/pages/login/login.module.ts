import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule, MatInputModule, MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SocketService } from '../../service/socket.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    RouterModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    CommonModule
  ],
  providers: [
    SocketService,
  ]
})
export class LoginModule {
}
