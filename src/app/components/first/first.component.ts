import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector   : 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls  : ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  serverData$: Observable<any> | undefined;
  users$: Observable<any> | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.users$ = this.http.get('api/users');
  }

  onClick(): void {
    this.serverData$ = this.http.get('my-first-route');
  }
}
