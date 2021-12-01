import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IApiGiftSearch, IData} from "../models/SearchApiGifs.model";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial:string[] = [];
  private api_key = "6PURXlpBQck29LpOWVvFZncuKvSiMFWl";
  private servicio_url = "https://api.giphy.com/v1/gifs";
  private _gifs:IData[] = [];


  constructor(private HTTP:HttpClient) {
    if(localStorage.getItem("historial"))
      this._historial = JSON.parse(localStorage.getItem("historial")!);
    if(localStorage.getItem("resultados"))
      this._gifs = JSON.parse(localStorage.getItem("resultados")!);
  }

  get historial(){
    return [...this._historial];
  }

  get gifs(){
    return [...this._gifs];
  }

  public buscarGifs(query:string){

    if(query != ""){
      if(!(this._historial.length >0 && this._historial[0].toLowerCase() == query.toLowerCase())){
        this._historial.unshift(query);
        this._historial = this._historial.slice(0,10);
        localStorage.setItem("historial", JSON.stringify(this._historial));
      }
    }

    let params:HttpParams = new HttpParams()
      .set("api_key", this.api_key)
      .set("limit", 20)
      .set("q", query);

    this.HTTP.get<IApiGiftSearch>( this.servicio_url + `/search`, {params})
      .subscribe((resp:IApiGiftSearch)=>{
          this._gifs = resp.data;
          localStorage.setItem("resultados", JSON.stringify(resp.data));
      })

  }
}
