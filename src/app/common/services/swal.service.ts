import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  callSwal(confirmBtnName: string, title: string, text: string, callBack: () => void){
    Swal.fire({
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: "Vazgeç",
      confirmButtonText: confirmBtnName,
      text: text,
      title: title,
      icon: 'question'
    }).then(res => {
      if(res.isConfirmed){
        callBack();
      }
    })
  }
}
