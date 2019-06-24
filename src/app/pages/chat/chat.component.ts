import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../service/socket.service';

@Component({
  selector: 'app-tchat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private socket: SocketService) {
  }

  ngOnInit() {
  }

  change() {

  }
}
