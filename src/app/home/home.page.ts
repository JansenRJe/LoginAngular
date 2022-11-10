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
    public local_Storage:LocalStorageService
  ) {
    this.carregar();
  }

  carregar(){
    /*this.site =this.local_Storage.get('site');
    this.login =this.local_Storage.get('login');
    this.senha =this.local_Storage.get('senha');*/
  }

  armazenar(){
    this.local_Storage.append('credencial',this.credencial);
  }

  del(){
    this.local_Storage.del("credencial.senha");
  }

  limpar(){
    this.local_Storage.clear();
  }
}
