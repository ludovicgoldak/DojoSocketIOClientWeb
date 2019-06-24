import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../service/socket.service';
import { ChangeWeightRequestMessage } from '../../models/packets/ChangeWeightRequestMessage';

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
    this.socket.socket.send('ChangeWeightRequestMessage', { newWeight: 10000 } as ChangeWeightRequestMessage);
  }
}
