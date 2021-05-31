import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarsWarService } from '../stars-war.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
})
export class CreateCharacterComponent implements OnInit {
  constructor(private swService: StarsWarService) {}

  ngOnInit(): void {}

  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' },
  ];

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.swService.addCharacter(form.value);
  }
}
