import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Felosial Tinleaf'},
      { id: 12, name: 'Byreth Gammidge'},
      { id: 13, name: 'Halorem Sera'},
      { id: 14, name: 'Ven'},
      { id: 15, name: 'Helios Volstrea'},
      { id: 16, name: 'Duo'},
      { id: 17, name: 'Buvpoz Onima Onima Malcent'},
      { id: 18, name: 'Reimund Klaffiele Filolial'},
      { id: 19, name: 'Belleth Nuckelavee'},
      { id: 20, name: 'Orleif Maryev'},
      { id: 21, name: 'Snaga Oglokine'},
      { id: 22, name: 'Chef'},
      { id: 23, name: 'Sera'},
      { id: 24, name: 'Khione Boreas'},
      { id: 24, name: 'Gar D.N.'},
      { id: 25, name: 'Lilt / Oriax Quest'},
      { id: 26, name: 'Fi'},
      { id: 27, name: 'Oscleipus Medusin'},
      { id: 28, name: 'Chaograth Baedrin'},
      { id: 29, name: 'Hylia'}
    ]

    return { heroes };
  }

  genId(heroes: Hero[]): number
 {
   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
 }}
