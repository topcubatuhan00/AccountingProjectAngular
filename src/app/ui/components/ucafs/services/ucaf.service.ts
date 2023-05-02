import { Injectable } from '@angular/core';
import { GenericHttpService } from 'src/app/common/services/generic-http.service';
import { UcafModel } from '../models/ucaf.model';
import { CryptoService } from 'src/app/common/services/crypto.service';
import { LoginResponseModel } from '../../auth/modals/login-response.model';
import { ResponseModel } from 'src/app/common/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class UcafService {

  loginResponse: LoginResponseModel = new LoginResponseModel();
  constructor(
      private _crypto: CryptoService,
      private _http: GenericHttpService
  ) {
    let loginResponseString = _crypto.decrypt(localStorage.getItem("accessToken").toString());
    this.loginResponse = JSON.parse(loginResponseString)
  }

  getAll(callBack: (res: ResponseModel<UcafModel[]>) => void) {
    let model = {companyId:this.loginResponse.company.companyId}
    this._http.post<ResponseModel<UcafModel[]>>("UCAFs/GetAll", model,res => callBack(res))
  }


}