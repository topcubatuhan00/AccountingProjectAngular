import { Injectable } from '@angular/core';
import { GenericHttpService } from 'src/app/common/services/generic-http.service';
import { UcafModel } from '../models/ucaf.model';
import { LoginResponseModel } from '../../auth/modals/login-response.model';
import { ResponseModel } from 'src/app/common/models/response.model';
import { MessageResponseModel } from 'src/app/common/models/message-response.mode';
import { CreateUcafModel } from '../models/create-ucaf.model';
import { RemoveByIdUcafModel } from '../models/remove-by-id-ucaf.model';
import { LoginResponseService } from 'src/app/common/services/login-response.service';

@Injectable({
  providedIn: 'root'
})
export class UcafService {

  loginResponse: LoginResponseModel = new LoginResponseModel();
  constructor(    
    private _http: GenericHttpService,
    private _loginResponse: LoginResponseService
  ){
    this.loginResponse = this._loginResponse.getLoginResponseModel();
  }


  getAll(callBack: (res: ResponseModel<UcafModel[]>) => void) {
    let model = { companyId: this.loginResponse.company.companyId }
    this._http.post<ResponseModel<UcafModel[]>>("UCAFs/GetAll", model, res => callBack(res))
  }

  add(model: CreateUcafModel, callBack: (res: MessageResponseModel) => void) {
    model.companyId = this.loginResponse.company.companyId;
    this._http.post<MessageResponseModel>("UCAFs/CreateUCAF", model, res => callBack(res));
  }

  update(model: UcafModel, callBack: (res: MessageResponseModel) => void) {
    model.companyId = this.loginResponse.company.companyId;
    this._http.post<MessageResponseModel>("UCAFs/Update", model, res => callBack(res));
  }

  removeById(model: RemoveByIdUcafModel, callBack: (res: MessageResponseModel) => void) {
    model.companyId = this.loginResponse.company.companyId;
    this._http.post<MessageResponseModel>("UCAFs/Remove", model, res => callBack(res));
  }
}
