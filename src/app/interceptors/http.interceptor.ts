import {Injectable, Injector, PLATFORM_ID} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {isPlatformServer} from '@angular/common';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {exhaustMap, map, take} from 'rxjs/operators';

import {APP_BASE_URL} from '@src/tokens';
import {APP_BASE_URL_KEY} from '@app/dictionary/transfer-state.dictionary';
import {TransferStateService} from '@app/services/transfer-state.service';
import {selectGuid} from '@app/store/selectors/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class HTTPInterceptor implements HttpInterceptor {
  constructor(private transferStateService: TransferStateService, private injector: Injector, private store: Store) { }

  private platformId = this.injector.get(PLATFORM_ID);
  private isServer = isPlatformServer(this.platformId);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let baseUrl: string = '';
    let apiReq: any;

    if (this.isServer) {
      baseUrl = this.injector.get(APP_BASE_URL) || '';

      if (!this.transferStateService.has(APP_BASE_URL_KEY)) {
        this.transferStateService.set(APP_BASE_URL_KEY, baseUrl);
      }

    } else {
      baseUrl = this.transferStateService.get(APP_BASE_URL_KEY) || '';
    }

    return this.store.select(selectGuid).pipe(
      take(1),
      map(userState => userState.guid),
      exhaustMap(guid => {
        apiReq = req.clone({
          url    : `${baseUrl}/${req.url}`,
          headers: req.headers.set('x-session-id', guid)
        });

        return next.handle(apiReq);
      })
    );
  }
}
