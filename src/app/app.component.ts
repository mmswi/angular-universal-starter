import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular-universal-starter';
  users$: Observable<any> | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.users$ = this.http.get('api/users');
  }
}
