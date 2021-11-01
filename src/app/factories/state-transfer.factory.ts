import { PLATFORM_ID, Injector } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Store } from '@ngrx/store';

import { TransferStateService } from '@app/services/transfer-state.service';
import guidGenerator from '@app/helpers/guid-generator';
import { setGuid } from '@app/store/actions/user.actions';
import { GUID_KEY } from '@app/dictionary/transfer-state.dictionary';

export function StateTransferFactory(
    transferStateService: TransferStateService,
    injector: Injector,
    store: Store
): any {
    return () => {
        const platformId = injector.get(PLATFORM_ID);
        const isServer = isPlatformServer(platformId);
        let guid: any = guidGenerator();

        if (isServer) {
            transferStateService.set(GUID_KEY, guid);
        } else {
            guid = localStorage.getItem(GUID_KEY) || transferStateService.get(GUID_KEY) || guid;
            localStorage.setItem(GUID_KEY, guid);
        }

        store.dispatch(setGuid({ guid: guid }));
    };
}
