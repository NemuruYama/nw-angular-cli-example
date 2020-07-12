import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NWService {

  constructor() { }

  public isNW(): boolean {
    return !!window.globalThis.nw;
  }
}
