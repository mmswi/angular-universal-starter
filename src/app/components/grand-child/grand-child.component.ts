import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoaderService} from '@app/services/loader.service';

@Component({
  selector   : 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls  : ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit {

  @Output() changeParent = new EventEmitter<any>();
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.triggerChange();
  }

  triggerChange(): any {
    // this.changeParent.emit();
    this.loaderService.setLoading(true);
    console.log('setting loaderService to true');
  }

}
