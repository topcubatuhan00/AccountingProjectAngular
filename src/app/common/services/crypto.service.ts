import { Injectable } from '@angular/core';

declare var require: any;

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  encyrpt(value: string) : string{
    var CryptoTS = require("crypto-ts");
    return CryptoTS.AES.encrypt(value, 'secret key 123');
  }

  decrypt(value: string) : string{
    var CryptoTS = require("crypto-ts");
    var bytes  = CryptoTS.AES.decrypt(value, 'secret key 123');
    return bytes.toString(CryptoTS.enc.Utf8);
  }
}
