import {HttpClient} from '@angular/common/http';
import {AfterContentInit, AfterViewChecked, ChangeDetectorRef, Component, DoCheck, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ParentComponent} from '../parent/parent.component';

@Component({
  selector   : 'app-child',
  templateUrl: './child.component.html',
  styleUrls  : ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewChecked, DoCheck, AfterContentInit, OnDestroy {
  @Output() changeParent = new EventEmitter<any>();
  constructor(private http: HttpClient, private parent: ParentComponent) { }

  // async ngOnInit(): Promise<void> {
  //   await this.http.get('api/users').toPromise();
  //   this.triggerChange();
  // }

  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.triggerChange();
  //   }, 0);
  // }

  ngOnInit(): void {
    // this.triggerChange();
    this.parent.text = 'OOOOPAAAA';
    console.log('child ngOnInit')
    ;
  }

  ngDoCheck(): void {
    // this.triggerChange();
    console.log('child ngDoCheck');
  }

  ngAfterViewChecked(): void {
    // this.triggerChange();
    console.log('child ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    // this.triggerChange();
    console.log('child ngAfterContentInit');
  }

  ngOnDestroy(): void {
    // this.triggerChange('child destroyed');
    console.log('child ngOnDestroy');
  }

  triggerChange(text?: string): any {
    this.changeParent.emit(text);
  }
}
