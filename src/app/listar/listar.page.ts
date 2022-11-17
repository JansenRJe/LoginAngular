import { Component, OnInit } from '@angular/core';
import { Credencial } from '../credencial';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  public data:Array<Credencial> = [];
  constructor(
    public localStorage:LocalStorageService
  ) {}

  ngOnInit() {
    this.carregar();
  }

  carregar(){
    this.data = this.localStorage.getJSON('Credencial');
  }
}
