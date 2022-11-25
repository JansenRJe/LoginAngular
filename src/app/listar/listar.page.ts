import { Component, OnInit } from '@angular/core';
import { Credencial } from '../credencial';
import { FirebaseService } from '../firebase.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  public data:Array<Credencial> = [];
  public icon_type:string = 'eye-outline';
  public pwd_type:string = 'password';

  constructor(
    public local_storage:LocalStorageService,
    public firebase:FirebaseService
  ) {}

  ngOnInit() {
    this.carregar();
  }

  carregar(){
    this.data = this.local_storage.getJSON('credenciais');
  }

  exibir(){
    if (this.icon_type == 'eye-outline'){
        this.icon_type = 'eye-off-outline';
        this.pwd_type = 'text';
    }else{
        this.pwd_type = 'password';
        this.icon_type = 'eye-outline';
    }
      
  }

  upload(){
    this.firebase.upload();
  }

  download(){
    this.firebase.download()
    .subscribe((data:any)=>{
      //faz a busca no local_storage e retorna se os dados estão ou não atualizados
        if(this.local_storage.get('credenciais') != data){
          alert('Seus dados estão desatualizados');
        }
      this.local_storage.set('credenciais', data);
      this.carregar();
      });
  }
}
