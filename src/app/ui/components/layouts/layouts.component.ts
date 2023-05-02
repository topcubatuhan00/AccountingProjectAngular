import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CryptoService } from 'src/app/common/services/crypto.service';
import { LoginResponseModel } from '../auth/modals/login-response.model';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
  loginResponse: LoginResponseModel = new LoginResponseModel();
  constructor(private _crypto: CryptoService) {
    let loginResponseString = _crypto.decrypt(localStorage.getItem("accessToken").toString());
    this.loginResponse = JSON.parse(loginResponseString)
  }
}
