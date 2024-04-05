import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {
  private debounce: Subject<string> = new Subject<string>();

  @Input()
  placeholder: string = "";

  @Output()
  onValue = new EventEmitter<string>();

  @Output()
  onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debounce
      .pipe(
        debounceTime(1000)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      });
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string): void {
    this.debounce.next(searchTerm);
  }
}
