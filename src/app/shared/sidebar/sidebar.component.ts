import { Component, OnInit } from '@angular/core';
import {GifsService} from "../../gifs/services/gifs.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private giftServices: GifsService) { }

  get busquedasRecientes(): string[]{
    return this.giftServices.historial;
  }

  ngOnInit(): void {
  }

  buscar(busqueda: string) {
    this.giftServices.buscarGifs(busqueda);
  }
}
