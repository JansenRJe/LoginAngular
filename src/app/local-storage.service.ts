import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public localStorage:any = window.localStorage;
  constructor() { }

  set(key:string,value:any){
    this.localStorage.setItem(key,value);
  }
  
  get(key:string){
    return this.localStorage.getItem(key);
  }

  del(key:string){
    this.set(key,'');
  }

  clear(){
    this.localStorage.clear()
  }
}
