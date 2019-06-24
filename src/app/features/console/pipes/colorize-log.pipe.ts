import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

/**
 * Author : Mehdi Aarab
 */
@Pipe({
  name: 'colorizeLog'
})
export class ColorizeLogPipe implements PipeTransform {


  private readonly patternBegin = '\\[';
  private readonly patternLOG = 'LOG=\\"[^\\"]*\\"\\s';
  private readonly patternDATE = 'DATE=\\"[^\\"]*\\"';
  private readonly patternTEXT = 'TEXT=\\"[^\\"]*\\"';
  private readonly patternEnd = '\\]';

  private readonly pattern = this.patternBegin + this.patternLOG + this.patternDATE + '(\\s' + this.patternTEXT + ')?' + this.patternEnd;

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string, args?: any): SafeHtml {
    const regexp = new RegExp(this.pattern);
    const isValid = regexp.test(value);

    if (isValid) {
      const regExpExtracted = regexp.exec(value)[0];

      const regexpLOG = new RegExp(this.patternLOG);
      const logType = this.getValueRegexp(regexpLOG.exec(regExpExtracted)[0]);

      const regexpDATE = new RegExp(this.patternDATE);
      const dateValue = this.getValueRegexp(regexpDATE.exec(regExpExtracted)[0]);

      const regexpTEXT = new RegExp(this.patternTEXT);
      const textValue = regExpExtracted.indexOf('TEXT') !== -1 ? this.getValueRegexp(regexpTEXT.exec(regExpExtracted)[0]) : '';

      return this.sanitizer.bypassSecurityTrustHtml(this.getValueToReplace(value.split(']')[1], dateValue, textValue, logType));
    }

    return '';
  }

  /**
   * retourne la valeur issue de la clef d'un log
   *
   * ex: 'LOG="WARN"' => 'WARN'
   */
  private getValueRegexp(fullLog: string): string {
    if (fullLog.length) {
      return fullLog.trim().replace(/"/g, '').split('=')[1];
    }

    return fullLog;
  }

  private getValueToReplace(valueToDisplay: string, date: string, texte: string, color: string): string {
    return '<span class="' + color.toLowerCase() + '"> [LOG ' + color + ' ' + date +
      (texte ? ' <strong>' : '') + texte + (texte ? '</strong> ' : '') + '] ' + '</span>' + valueToDisplay;
  }

}
