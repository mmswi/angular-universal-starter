import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private subject = new BehaviorSubject<boolean>(false);

  readonly isLoading$ = this.subject.asObservable();

  setLoading(value: boolean): void {
    this.subject.next(value);
  }
}
