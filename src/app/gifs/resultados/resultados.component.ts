import { Component, OnInit } from '@angular/core';
import {GifsService} from "../services/gifs.service";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get gifs(){
    return this.gifsService.gifs;
  }

  ngOnInit(): void {
  }

}
