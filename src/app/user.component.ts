import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() name;
  @Output() changeName = new EventEmitter<string>();

  onChangeName(event) {
    this.changeName.emit(event.target.value);
  }
}
