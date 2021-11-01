import {readFileSync} from 'fs';
import {join, resolve, basename} from 'path';
import {SvgLoader} from 'angular-svg-icon';
import {Observable} from 'rxjs';

import {TransferStateService} from '@app/services/transfer-state.service';
import {TRANSFER_SVG_KEY} from '@app/dictionary/transfer-state.dictionary';

export class SvgServerLoader implements SvgLoader {

  constructor(private iconPath: string,
    private transferStateService: TransferStateService) {
  }

  getSvg(url: string): Observable<string> {
    const fileNameWithHash = basename(url);

    // Remove content hashing
    const fileName = fileNameWithHash.replace(/^(.*)(\.[0-9a-f]{16,})(\.svg)$/i, '$1$3');
    const filePath = join(this.iconPath, fileName);

    return new Observable(observer => {
      const key = `${TRANSFER_SVG_KEY}${url}`;
      if (this.transferStateService.get(key)) {
        return;
      }

      const svgData = readFileSync(resolve(__dirname, filePath), 'utf8');

      // Here we save the translations in the transfer-state
      this.transferStateService.set(key, svgData);

      observer.next(svgData);
      observer.complete();
    });
  }
}
