import { Component, Input, OnInit } from '@angular/core';
import { CustomLog } from './models/custom-log';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  @Input() public logs: CustomLog[] = [];


  constructor() {
  }

  ngOnInit() {

  }
}
