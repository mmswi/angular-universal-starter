import {Component, Input, OnChanges} from '@angular/core';
import {LoaderService} from '@app/services/loader.service';
import {Observable} from 'rxjs';
import {ParentComponent} from '../parent/parent.component';

@Component({
  selector   : 'app-other-child',
  templateUrl: './other-child.component.html',
  styleUrls  : ['./other-child.component.scss']
})
export class OtherChildComponent implements OnChanges {
  @Input() isLoading: boolean | null | undefined;
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;


  constructor(private parent: ParentComponent, private loaderService: LoaderService) { }

  ngOnChanges() {
    // this.parent.text = 'OOOOPAA';
    console.log('other child ngOnChanges')
  }
}
