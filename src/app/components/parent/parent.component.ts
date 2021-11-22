import {Component, DoCheck, OnInit} from '@angular/core';
import {LoaderService} from '@app/services/loader.service';
import {Observable} from 'rxjs';

@Component({
  selector   : 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls  : ['./parent.component.scss']
})
export class ParentComponent {

  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  text = 'some text';
  showChild = true;
  constructor(private loaderService: LoaderService) { }

  changeProps(newText: any): void {
    this.changeText(newText);
  }

  changeText(newText: any): void {
    this.text = newText || 'some other text';
    console.log('parent this.text: ', this.text);
  }

  toggleChild(): void {
    this.showChild = !this.showChild;
  }
}
