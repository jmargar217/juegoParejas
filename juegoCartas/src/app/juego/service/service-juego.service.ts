import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carta, SearchCard, Cardmarket } from '../interfaces/cardData.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceJuegoService {
  private url:string = "https://api.pokemontcg.io/v2/cards?pageSize=5";

  private _cartas:string[]=[];

  get cartas():string[]{
    return[...this._cartas];
  }

  constructor(private http:HttpClient) { }

  obtenerImagenes():string[]{
    this.http.get<SearchCard>(this.url).subscribe(datos => {
      for(let i=0;i<datos.data.length;i++){
        this._cartas.push(datos.data[i].images.small);
      }

     });
    return this._cartas;
  }
}
