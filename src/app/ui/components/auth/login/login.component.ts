import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidInputDirective } from 'src/app/common/valid-input.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule, FormsModule, ValidInputDirective],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
