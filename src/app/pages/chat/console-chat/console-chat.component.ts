import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SocketService } from '../../../service/socket.service';
import { CommandRequestMessage } from '../../../models/packets/CommandRequestMessage';

@Component({
  selector: 'app-console-chat',
  templateUrl: './console-chat.component.html',
  styleUrls: ['./console-chat.component.scss']
})
export class ConsoleChatComponent implements OnInit {
  public formConsole: FormGroup;

  constructor(public socket: SocketService) {
    this.formConsole = new FormGroup({
      input: new FormControl(),
    });
  }


  ngOnInit(): void {
  }

  public submit() {
    const command = this.formConsole.get('input').value;
    if (command) {
      this.socket.socket.send('CommandRequestMessage', {
        cmd: command
      } as CommandRequestMessage);
      this.formConsole.reset();
    }
  }

  public keypress(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.submit();
    }
  }
}
