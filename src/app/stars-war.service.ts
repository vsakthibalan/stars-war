import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StarsWarService {
  constructor(private http: HttpClient) {}

  private characters = [
    { name: 'Luke SkyWalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  charactersChanged = new Subject<void>();
  getCharacters(choosenSide) {
    if (choosenSide === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((character) => {
      return character.side === choosenSide;
    });
  }

  fetchCharacters() {
    this.http
      .get('https://swapi.dev/api/people')
      .pipe(
        map((res: any) => {
          const extractedChars = res.results;
          const chars = extractedChars.map((char) => {
            return { name: char.name, side: '' };
          });
          return chars;
        })
      )
      .subscribe((data) => {
        (this.characters = data), this.charactersChanged.next();
      });
  }

  getSideRole(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
  }

  addCharacter(character) {
    const pos = this.characters.findIndex((char) => {
      return char.name === character.name;
    });
    if (pos !== -1) {
      return;
    }
    const newChar = { name: character.name, side: character.side };
    this.characters.push(newChar);
  }
}
