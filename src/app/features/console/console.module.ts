import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsoleComponent} from './console.component';
import {ColorizeLogPipe} from './pipes/colorize-log.pipe';
import {ColorizeCustomLogPipe} from './pipes/colorize-custom-log.pipe';
import {NgxAutoScrollModule} from 'ngx-auto-scroll';

@NgModule({
  declarations: [
    ConsoleComponent,
    ColorizeLogPipe,
    ColorizeCustomLogPipe],
  imports: [
    NgxAutoScrollModule,
    CommonModule
  ],
  exports: [ConsoleComponent]
})
export class ConsoleModule {
}
