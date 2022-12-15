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
    this.firebase.database.ref('/credencial')
    .set(this.ls.getJSON('crendencial'));
  }
  download(){
    return this.firebase
    .object('/credencial')
    .valueChanges();
    
  }
  clear(){
    this.firebase.database.ref('/credencial/key')
    .set(this.ls.getJSON('crendencial'));
    
   
  }
}
