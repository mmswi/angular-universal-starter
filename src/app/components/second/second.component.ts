import {HttpClient} from '@angular/common/http';
import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Observable} from 'rxjs';
import {isPlatformServer} from '@angular/common';

@Component({
  selector   : 'app-second',
  templateUrl: './second.component.html',
  styleUrls  : ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  secondData$: Observable<any> | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private http: HttpClient) { }

  ngOnInit(): void {
    this.secondData$ = this.http.get('my-second-route')
  }

}
