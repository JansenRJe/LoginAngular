import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public site:string = '';
  public login:string = '';
  public senha:string = '';

  constructor(
    public local_Storage:LocalStorageService
  ) {
    this.site =this.local_Storage.get('site');
    this.login =this.local_Storage.get('login');
    this.senha =this.local_Storage.get('senha');
  }
  
  armazenar(){
    this.local_Storage.set('site',this.site);
    this.local_Storage.set('login',this.login);
    this.local_Storage.set('senha',this.senha);
  }
  del(){
    this.local_Storage.del("senha");
  }

  limpar(){
    this.local_Storage.clear();
  }
}
