import { Injectable } from '@angular/core';
import { GenericHttpService } from 'src/app/common/services/generic-http.service';
import { LoginResponseModel } from '../modals/login-response.model';
import { Router } from '@angular/router';
import { CryptoService } from 'src/app/common/services/crypto.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api: string = "https://localhost:7120/api/Auth/Login";
  constructor(
    private _http: GenericHttpService,
    private _router: Router,
    private _crypto: CryptoService
  ) { }

    login(model: any){
      this._http.post<LoginResponseModel>(this.api,model, res => {
        let cryptoValue = this._crypto.encyrpt(JSON.stringify(res));
        localStorage.setItem("accessToken",cryptoValue);
        this._router.navigateByUrl("/");
      })
      
    }

    logout(){
      localStorage.removeItem("accessToken");
      this._router.navigateByUrl("/login");
    }

}
