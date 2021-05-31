import { Component, OnInit } from '@angular/core';
import { StarsWarService } from './stars-war.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  constructor(private swService: StarsWarService) {}
  ngOnInit(): void {
    this.swService.fetchCharacters();
  }
  // rootName = 'Sakthibalan';

  // items = ['Apples', 'Bananas', 'Cherries'];

  // setNewName(newName: string) {
  //   this.rootName = newName;
  // }

  // addItem(newItem: string) {
  //   this.items.push(newItem);
  //   console.log(this.items);
    
  // }


}
