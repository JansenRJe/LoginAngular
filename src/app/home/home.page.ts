import { Component } from '@angular/core';
import { Credencial } from '../credencial';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public _credencial = {} as Credencial;
  constructor(
    public local_storage: LocalStorageService
  ) {
    this.carregar();
  }
  carregar() {
    
  }
  armazenar(){
    this.local_storage.append('crendencial',this._credencial);
    this.armazenar();
    this.clear();
    return this.carregar();
  }
  clear() {
    this._credencial.login = '';
    this._credencial.senha = '';
    this._credencial.site = '';
  }

}
