import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debounce: Subject<string> = new Subject<string>();
  private debounceSubscription?: Subscription;

  @Input()
  placeholder: string = "";

  @Output()
  onValue = new EventEmitter<string>();

  @Output()
  onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debounceSubscription = this.debounce
      .pipe(
        debounceTime(1000)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debounceSubscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string): void {
    this.debounce.next(searchTerm);
  }
}
