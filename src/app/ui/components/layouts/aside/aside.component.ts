import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginResponseModel } from '../../auth/modals/login-response.model';
import { RouterModule } from '@angular/router';
import { Navigations } from 'src/app/ui/router/navigation';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  @Input() loginResponse: LoginResponseModel = new LoginResponseModel();

  navigations = Navigations;

  constructor(private _authService: AuthService){}

  logout(){
    this._authService.logout();
  }
}
