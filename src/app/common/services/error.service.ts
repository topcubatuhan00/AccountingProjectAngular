import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService, ToastrType } from 'src/app/ui/components/auth/services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private _toastr: ToastrService) { }

  errorHandler(err: HttpErrorResponse) {
    if (err.status == 0) {
    }

    switch (err.status) {
      case 0:
        this._toastr.toast(ToastrType.Error, "Hata!", "API adresine ulaşılamadı")
        break;
      case 404:
        this._toastr.toast(ToastrType.Error, "Hata!", "API adresi bulunamıyor")
        break;
        case 500:
          if(err.error.Errors){
            err.error.Errors.forEach((element:any) => {
              this._toastr.toast(ToastrType.Error, "Hata!", element)
              console.log(element)
            });
          }else{
            this._toastr.toast(ToastrType.Error, "Hata!", err.error.Message)
          }
          break;

      default:
        break;
    }

    console.log(err)
  }
}
