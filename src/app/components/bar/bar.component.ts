import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass']
})
export class BarComponent {

  @Output() searchOutput: EventEmitter<string> = new EventEmitter();

  public text: string;
  public loading: boolean;

  private readonly ENTER = 'Enter';

  constructor() {
    this.text = '';
  }

  public search(): void {
    if (this.text) {
      this.searchOutput.emit(this.text);
    }
  }

  keyEvent(event: KeyboardEvent) {
    if (this.ENTER === event.key && this.text) {
      this.searchOutput.emit(this.text);
    }
  }
}
