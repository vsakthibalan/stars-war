import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StarsWarService } from '../stars-war.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() character;
  constructor(private swService: StarsWarService) {}

  ngOnInit(): void {}

  getSide(side) {
    this.swService.getSideRole({ name: this.character.name, side: side });
  }
}
