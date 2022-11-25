import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public firebase: AngularFireDatabase,
    public ls:LocalStorageService
  ) { }

  upload(){
    this.firebase.database.ref('/credenciais')
    .set(this.ls.getJSON('credenciais'));
  }
  download(){
    return this.firebase
    .object('/credenciais')
    .valueChanges();
    
  }
}
