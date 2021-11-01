import { Injector, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TransferStateService } from '@app/services/transfer-state.service';
import { SvgServerLoader } from './svg-loaders/svg-server.loader';
import { SvgBrowserLoader } from './svg-loaders/svg-browser.loader';


export function svgLoaderFactory(
  http: HttpClient,
  transferStateService: TransferStateService,
  injector: Injector
): SvgServerLoader | SvgBrowserLoader {
  const platformId = injector.get(PLATFORM_ID);

  if (isPlatformServer(platformId)) {
    return new SvgServerLoader('../browser/assets/svgs', transferStateService);
  } else {
    return new SvgBrowserLoader(http, transferStateService);
  }
}
