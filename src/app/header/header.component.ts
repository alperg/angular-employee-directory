import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() doSearch: EventEmitter<string> = new EventEmitter();

  change(event) {
    this.doSearch.emit(event.target.value);
  }

}
