import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../services/gifs.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild("in_search")
  private in_search!: ElementRef<HTMLInputElement>;


  constructor(private gifsServices: GifsService) { }

  public buscar(){
    this.gifsServices.buscarGifs(this.in_search.nativeElement.value);

    this.in_search.nativeElement.value = "";
  }

}
