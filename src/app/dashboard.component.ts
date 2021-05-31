import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>Hello {{ name }}</p>
    <p [textContent]="loadState"></p>
    <button (click)="onChangeState()">Click Me</button><br />
    <input type="text" [(ngModel)]="changeName" />
    <p>Hello {{ changeName }}</p>
  `,
})
export class DashBoardComponent {
  @Input() name = 'Sakthi';

  loadState = 'loading';

  onChangeState() {
    this.loadState = 'finished';
  }

  changeName = '';
}
