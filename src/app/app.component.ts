import {Component} from '@angular/core';
import {SocketService} from './service/socket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private supervisorService: SocketService,
  ) {

    if (!this.supervisorService.identified && this.router.url !== 'login' && this.router.url !== 'signup') {
      this.router.navigateByUrl('login');
    }
  }
}
