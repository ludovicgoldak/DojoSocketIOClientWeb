import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../service/socket.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public Math = Math;

  constructor(private socket: SocketService) {
  }

  ngOnInit() {
  }

}
