import { Component } from '@angular/core';
import { Credencial } from '../credencial';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public credencial = {} as Credencial;
  constructor(
    public local_storage: LocalStorageService
  ) {
    this.carregar();
  }
  carregar() {
    //this.site   = this.local_storage.get('site');
    //this.login  = this.local_storage.get('login');
    //this.senha  = this.local_storage.get('senha');
  }
  armazenar(){
    this.local_storage.append('credenciais',this.credencial);
  }
  limpar() {


    this.credencial.login = '';
    this.credencial.senha = '';
    this.credencial.site = '';
  }

}
