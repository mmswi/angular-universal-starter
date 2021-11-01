import {HttpClient} from '@angular/common/http';
import {SvgHttpLoader, SvgLoader} from 'angular-svg-icon';
import {Observable} from 'rxjs';
import {TransferStateService} from '@app/services/transfer-state.service';
import {TRANSFER_SVG_KEY} from '@app/dictionary/transfer-state.dictionary';

export class SvgBrowserLoader implements SvgLoader {
  constructor(private http: HttpClient, private transferStateService: TransferStateService) {
  }

  getSvg(url: string): Observable<string> {
    const key = `${TRANSFER_SVG_KEY}${url}`;
    const data = this.transferStateService.get(key, null);
    // First we are looking for the translations in transfer-state, if none found, http load as fallback
    if (data) {
      return new Observable(observer => {
        observer.next(data as any);
        observer.complete();
      });
    } else {
      return new SvgHttpLoader(this.http).getSvg(url);
    }
  }
}
