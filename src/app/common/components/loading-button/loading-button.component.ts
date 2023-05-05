import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loading-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.css']
})
export class LoadingButtonComponent {
  @Input() isLoading: boolean = false;
  @Input() form: NgForm;
  @Input() btnName: string = "";
  @Input() btnLoadingDesc: string = "";
  @Input() btnLoadingClass: string = "btn-outline-primary w-100";
  @Input() btnClass: string = "btn-outline-primary w-100";
  @Input() iconClass: string = "fa fa-save";
} 
